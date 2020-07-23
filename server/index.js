const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


//app.use(express.static(__dirname + '/../client'));

app.use(express.static(path.join(__dirname, '../client')));


//app.get('/:id', (req, res) => {
//  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
//});


app.get('./bundle.js/:3004', (req, res) => {
   request('http://ec2-3-23-61-11.us-east-2.compute.amazonaws.com:3004/bundle.js', (err, response, body) => {
	res.status(200).send(body);
   })
 })


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
