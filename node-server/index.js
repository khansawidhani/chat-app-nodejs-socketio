const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// const http = require('http');
// const port = process.env.PORT || 3000;  

// const users = {}
// io.on('connection', socket=> {
//     console.log('A new user connected');
//     // socket.on('new-user-joined', user => {
//     //     users[socket.id] = user; 

//     // })
//     socket.on('send', )
//     socket.on('disconnect', ()=> {
//         console.log('User disconnected');
//     })

// });
app.use(express.static(path.dirname(__dirname)));
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.header('Content-Type', 'text/html');
    var home = path.dirname(__dirname)  + '\\index.html';
    res.sendFile(home);
    console.log(home);
    

});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('new-user-joined', name => {
        users[socket.id] = name; 
        socket.on('user-joined', () => {
            socket.broadcast.emit()

        })
    }); 
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
