const app = require('express')();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

io.on('connection', (socket) => {
    console.log("Un utilisateur s'est connecter");

    socket.on('disconnect', ()=> {
        console.log('User disconnected');
    })
    
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    });   
});



server.listen(3000, () => {
    console.log('ECOUTE SUR LE PORT 3000 ...✅');
});