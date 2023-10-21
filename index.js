const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res)=> {
    res.send('HELLO WORLD!')
});


app.post('/auth', (req, res) => {

});

app.listen(3000, () => {
    console.log('Server started');
});