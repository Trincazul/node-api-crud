const express = require('express');
const userRoutes = require('./routes/userRoutes')
const bodyParse = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParse.urlencoded({ extended: false }))

userRoutes(app);

app.get('/', (req, res) => res.send('olá mundo pelo express'))

app.listen(port, () => console.log('API rodando na porta 3000'));