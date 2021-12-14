const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef  = protoLoader.loadSync("todo.proto",{});
const grpcObject  = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;


const client = new todoPackage.Todo('localhost:9000', grpc.credentials.createInsecure());

client.createTodo({
    'id':1 ,
    'text': 'Hello'
}, (err, response)=> {
    console.log('Received from Server' + JSON.stringify(response));
})

client.readTodos({}, (err, response)=> {
   console.log('todos', JSON.stringify(response));
})


client.createadd({
    'a':2 ,
    'b':3
}, (err, response)=> {
    console.log('Fonction add' + JSON.stringify(response));
})

client.multiplication({
    'a':2 ,
    'b':3
}, (err, response)=> {
    console.log('Fonction multiplication' + JSON.stringify(response));

})

client.soustraction({
    'a':2 ,
    'b':3
}, (err, response)=> {
    console.log('Fonction soustraction' + JSON.stringify(response));

})

client.createadd({
    'a':2 ,
    'b':3
}, (err, response)=> {
    console.log('Fonction add' + JSON.stringify(response));

})

client.multiplication({
    'a':2 ,
    'b':3
}, (err, response)=> {
    console.log('Fonction multiplication' + JSON.stringify(response));

})

client.soustraction({
    'a':2 ,
    'b':3
}, (err, response)=> {
    console.log('Fonction soustraction' + JSON.stringify(response));

})

client.createUser({
    'iduser':1,
    'nom': 'Aya',
    'prenom':'Mrah',

},(err, response)=> {
    console.log('create User' + JSON.stringify(response));
})

client.addUser({
    'iduser':2,
    'nom':'salma',
    'prenom':'riahi'
}, (err, response)=> {
    console.log('Fonction add' + JSON.stringify(response));

})

client.addUser({
    'iduser':3,
    'nom':'salim',
    'prenom':'hi'
}, (err, response)=> {
    console.log('Fonction add' + JSON.stringify(response));

})



client.removeuser({
    'iduser':1,
    'nom':'salma',
    'prenom':'riahi'
}, (err, response)=> {
    console.log('Fonction delete' + JSON.stringify(response));

})

client.updateUser({
    'iduser':2,

}, (err, response)=> {
    console.log('Fonction update' + JSON.stringify(response));

})

client.readUsers({}, (err, response)=> {
    console.log('users', JSON.stringify(response));
})