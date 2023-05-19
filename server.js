const express = require('express');
const app = express();

// Configurar middlewares, rotas e outras configurações aqui

// Rota de exemplo para testar o servidor
app.get('/', (req, res) => {
  res.send('Servidor Express em execução!');
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
