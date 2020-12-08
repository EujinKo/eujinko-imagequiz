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
        return {number: x.number, quizzes:x.quizzes};
    })
    // response.json(data.quizzes);   
    response.json(metadata);    
});


app.post('/score',(request,response)=>{
    let quizid = request.body.quizid;
    let score = request.body.score;

    let trig = false;
    data.scores.map(x=>{
        if(request.body.quizid == x.quizid){
            x.score = request.body.score;
            trig = true;
        }
    });
    if(!trig){
        data.scores.push({quizid:quizid, score: score});
    }
    
    response.json({message:'The score saved successfully'});
});

app.get('/scores',(request,response)=>{
    response.json(data.scores);
});

app.get('/scores/:quizid',(request,response)=>{
    let searchFor = request.params.quizid;
    data.scores.map(x=>{
        if(searchFor == x.quizid){
            response.json(x);
        }
    });
    response.status(404).json({error:`The place ${searchFor} could not be found.`});
   
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