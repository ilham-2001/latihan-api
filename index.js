const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res)=> {
    res.send('HELLO WORLD!')
});

app.post('/auth', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);

    res.send('AUTH IS COMPLETED');
});

app.listen(3000, () => {
    console.log('Server started');
});