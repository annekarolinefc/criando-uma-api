//importando o express 
import express from 'express'
//instanciando o express
const app = express();
const customers = [
    {id:1, name: 'Marcos Vinicius'},
    {id:2, name: 'Maria Eduarda'},
    {id:3, name: 'José Franscisco'},
]; //array de clientes

app.use(express.json);

app.get('/api/ping', (request, response, next) =>{
    //request: o que chega no endpoint
    //response: o que vou enviar pro endpoint/cliente

    //PRIMEIRO ENDPOINT CRIADO
    response.send({
        message: 'pong'
    })
});

app.get('/api/customers', (request, response, next) =>{
    response.send(customers);
});

app.post('/api/customers', (request, response, next) =>{
    //pegando informações
    const { body } = request;
    //acrescentando no array
    customers.push(body)
    //mandando de volta o array atualizado
    response.send(customers);
});

//aplicação na porta 8000
app.listen(8000, () => {
    console.log("Servidor funcionando na porta 8000...")
})