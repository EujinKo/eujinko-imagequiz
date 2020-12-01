const express = require(`express`);
var cors = require('cors');
var bodyParser = require('body-parser');
let data = require('./data.js');

const app = express();


//middlewares
app.use(cors());
app.use(bodyParser.json());


//cannot use certain port since that can be already occupied. 
//  Therefore the port will be provided by the enterprise
const port = process.env.PORT || 3002;

app.get('/',(request,response)=>{
    response.send("Welcome to Image Quiz API");


});
app.get('/quizzes',(request,response) => {
    let metadata = data.quizzes.map(x => {
        return {name: x.name, id:x.id, picture: x.picture};
    })
    response.json(data.quizzes);   
    // response.json(metadata);    
});


app.get('/score',(request,response)=>{
    let username = request.body.username;
    let quizid = request.body.quizid;
    let score = request.body.score;
    data.scores.push({score: score, quizid:quizid,username:username});
    response.json({message:'The score saved successfully'});
});

app.get('/quiz/:id',(request,response)=>{
    let searchFor = request.params.id;
    data.quizzes.map(x=>{
        if(searchFor == x.number){
            response.json(x);
        }
    });
    response.status(404).json({error:`The place ${searchFor} could not be found.`});
   
});



app.listen(port,() => {
    console.log(`Example app listening on port ${port}!`);
});