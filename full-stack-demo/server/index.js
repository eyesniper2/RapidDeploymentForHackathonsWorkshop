const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
var http = require('http').Server(app);


const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
 
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

require('./routes/get-list-item')(app);
require('./routes/post-list-item')(app);

//Load all other pages
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'../frontend/build/index.html'));
});
  
http.listen(port);

console.log('This server is active on port ' + port);