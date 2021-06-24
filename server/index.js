const express = require('express');
const app = express();

const path = require('path');

app.use('/static', express.static(path.name(__dirname + '/public')))


app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, '../index.html'));
})

const port = process.env.PORT || 5040;

app.listen(port, function() {
    console.log(`Server is jamming on ${port}`)
})


