const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(express.static('public'));

var currentBuzzWord = [];

app.get('/buzzwords'), jsonParser, ((req, res, next)=>{
	
});


app.post('/buzzword', (req,res)=>{
	currentBuzzWord.push(req.body);
	console.log(currentBuzzWord);
	if(res.buzzword != currentBuzzWord.buzzword){//check to see if word does not have the same word in array
		res.send(`{"heard":true}`)
	}else{
		res.send(`{"heard":false}`)
	}

});
// .post('/reset', (req,res)=>{
//  //reset server buzzwords and score to 0
// });

function addWord (req,res,next,{word, point}){
 res.buzzWord= `{    
 buzzWord: ${word}
 points: ${point}
  }`;
     next();
}

// app.put('/buzzword') ((req,res,next)=>{
//  //update buzzword return true and new score  else =false
// });

// app.delete('/buzzword')

// app.post('/reset')







const server = app.listen(8080, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log(`server running on ${host}, at port ${port}`);
});