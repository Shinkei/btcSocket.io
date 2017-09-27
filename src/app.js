const express = require('express');
const path = require('path');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/jquery', express.static(path.resolve(__dirname, '../node_modules/jquery/')));

server.listen(3000, () => {
    console.log('Server up');
});