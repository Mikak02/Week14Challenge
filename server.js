const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const mysql = require('mysql2');

app.use(express.static('path'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './path'));
});


app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
});