const nr = require('newrelic');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


//app.use(express.static(__dirname + '/../client'));

app.use(express.static(path.join(__dirname, '../client')));


//app.get('/:id', (req, res) => {
//  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
//});

app.get('/loaderio-ca6ed2380dc080d38bc86360315d1130/', (req, res) => {
  res.send('loaderio-ca6ed2380dc080d38bc86360315d1130')
})

//app.get('./bundle.js/loaderio-ca6ed2380dc080d38bc86360315d1130/', (req, res) => {
//  res.send('loaderio-ca6ed2380dc080d38bc86360315d1130')
//})



app.get('./bundle.js/:3004', (req, res) => {
   request('http://ec2-3-129-83-122.us-east-2.compute.amazonaws.com:3004/bundle.js', (err, response, body) => {
	res.status(200).send(body);
   })
 })


app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});
