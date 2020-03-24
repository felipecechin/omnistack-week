const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: "Semana",
        aluno: "Felipe"
    })
})

app.listen(3333);
