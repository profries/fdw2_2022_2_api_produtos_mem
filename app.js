const express = require('express')
const rotaProduto = require('./rotas/produto_rotas')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/produtos', rotaProduto);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})