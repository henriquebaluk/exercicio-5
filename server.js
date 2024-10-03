
const express = require('express');
const app = express();


app.get('/', (req, res) => {

  res.send(`
    <html>
      <head>
        <title>Página Inicial</title>
      </head>
      <body>
        <h1>Bem-vindo ao meu site!</h1>
        <p>Este é um exemplo simples de uma página HTML servida com Express.</p>
      </body>
    </html>
  `);
});


app.get('/api/data', (req, res) => {

  res.json({
    nome: 'Seu Nome',
    idade: 25, 
    email: 'seuemail@dominio.com'
  });
});

app.listen(3000, () => {
  console.log('Servidor Express rodando na porta 3000');
});
