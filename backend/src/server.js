//importando express
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
});


mongoose.connect('mongodb+srv://moesio:ferreira.mm6374@cluster0-gnbnf.mongodb.net/omnistack?retryWrites=true', {
    useNewUrlParser: true
});

app.use((req, res, next)=>{
    req.io = io;
    return next();
})

//entende as requisições que são respondidas em formato JSON
app.use(express.json())
//permite que envie arquivos nas requisições
app.use(express.urlencoded({ extended: true }))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

//importando o arquivo de rotas aqui
app.use(require('./routes'));

//cria a porta em que o servidor vai ser rodado
server.listen(process.env.PORT || 3333);
