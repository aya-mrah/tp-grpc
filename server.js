const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("todo.proto",{});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const server = new grpc.Server();

server.bind('localhost:9000', grpc.ServerCredentials.createInsecure());

server.addService(todoPackage.Todo.service, {

    'createTodo':createTodo,
    'readTodos': readTodos,
    'createadd': createadd,
    'multiplication': multiplication,
    'soustraction':soustraction,
    'removeuser':removeuser,
    'createUser':createUser,
    'addUser':addUser,
    'updateUser':updateUser,
    'readUsers': readUsers
});


server.start();
const todos = [];

const users = [
    { iduser: 0, nom: 'John',prenom: 'Jogy' },
    { iduser: 1, nom: 'Wayne', prenom: 'Jogy'  },
    { iduser: 2, nom: 'David', prenom: 'Jogy'  },
];

const names = users.map(function (user) {
    return user.nom;
});

function createTodo(call, callback){
    const todoItem = {
        'id' : todos.length +1,
        'text': call.request.text
    }
    todos.push(todoItem);
    callback(null, todoItem);
}

function createUser(call, callback){
    const UserItem = {
        'iduser' : users.length +1,
        'nom': call.request.nom,
        'prenom': call.request.prenom
    }
      users.push(UserItem);
      console.table(users);
 //   callback(null, UserItem);
}

function addUser(call, callback){
    const UserItem = {
        'iduser' : users.length +1,
        'nom': call.request.nom,
        'prenom': call.request.prenom
    }
     users.push(UserItem);
     console.log(users);

}


function readTodos(call, callback){
    callback(null, {
        'items': todos
    });
}

function readUsers(call, callback){
    callback(null, {
        'items': users
    });
}


function multiplication(call, callback){
    const {a,b}= call.request;

    callback(null, {
        c: a * b 
    });
}

function soustraction(call, callback){
    const {a,b}= call.request;

    callback(null, {
        c: b-a 
    });
}

function readadd(call, callback){
    callback(null, {
        'c': 12
    });
}

function createadd(call, callback){

    const {a,b}= call.request;

    callback(null, {
        c: a + b
    });
}


//console.log(names);
let user = users.find(user => user.iduser === 2);
console.log(user);
function removeuser(call, callback){
    const {iduser}= call.request;
    const names = users.map(function (user) {
        return user.name;
    });
    const UserItem = {
        'iduser' : users.length +1,
        'nom': call.request.nom,
        'prenom': call.request.prenom
    }
    console.log(iduser);
    // console.table(users);
    //users.pop(); //supprimer le premier utilisateur
    users.splice(iduser,iduser);//supprimer user dont id =iduser
    console.log("remove user");
    console.table(users);

}

function updateUser(call, callback){
    const {iduser}= call.request;

    const UserItem1 = {
           'iduser':iduser,
           'nom': 'malek',
           'prenom':'bjeoui'
       }
    const UserItem = {

        'nom': UserItem1.nom,
        'prenom':UserItem1.prenom
    }

    UserItem.nom=UserItem1.nom;
    UserItem.prenom=UserItem1.prenom;
    users.some(item => item.iduser === iduser)

   // users.set(UserItem,UserItem1);
    console.log(iduser);
    console.log("Update user");
    console.table(users);

}