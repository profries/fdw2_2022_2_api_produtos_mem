const express = require('express')
const app = express()
const port = 3000

app.get('/produtos', (req, res) => {
    res.send('Listando produtos!')
})

app.post('/produtos', (req, res) => {
    res.send('Cadastrando Produtos!')
})

app.get('/produtos/:id', (req, res) => {
    res.send('Buscando o produto '+req.params.id)
})

app.put('/produtos/:id', (req, res) => {
    res.send('Atualizando o produto '+req.params.id)
})
  
app.delete('/produtos/:id', (req, res) => {
    res.send('Removendo o produto '+req.params.id)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})