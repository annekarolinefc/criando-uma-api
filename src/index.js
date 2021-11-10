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

//POST - INSERIR - É O INSERT DO BANCO DE DADOS
app.post('/api/customers', (request, response, next) =>{
    //pegando informações
    const { body } = request;
    //acrescentando no array
    customers.push(body)
    //mandando de volta o array atualizado
    response.send(customers);
});

//PUT -> ATUALIZAR
//localhost:8000/api/customers/:id
app.put('/api/customers/:id', (request, response, next) =>{
    //pegar o id
    const { id } = request.params;
    //pegar o corpo da requisição - JSON
    const { body } = request;

    //manipular o array
    const index = customers.findIndex(customer => customer.id ==id);

    //atualizar a informação - so atualiza o name
    customers[index]= {id, ...body};

    //retornando a atualização
    response.send(customers)
});


//DELETE
app.delete('/api/customers/:id', (request, response, next) =>{
    //pegar o id
    const { id } = request.params;
    //realiza um filtro. Filtra todos menos o do id
    const newArray = customers.filter(customers => customer.id != id)
    response.send(newArray);
});

//aplicação na porta 8000
app.listen(8000, () => {
    console.log("Servidor funcionando na porta 8000...")
})