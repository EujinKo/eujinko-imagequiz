const express = require(`express`);
var cors = require('cors');
let data = require('./data.js');

const app = express();


//middlewares
app.use(cors());


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

app.listen(port,() => {
    console.log(`Example app listening on port ${port}!`);
});