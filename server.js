const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname+'/dist/ruby'));

app.listen(process.env.PORT || 8080);

// Path location stratogy
app.get('/*',(req,res) =>{
	res.sendFile(path.join(__dirname + '/dist/ruby/index.html'));
});

console.log("Console listen!");
