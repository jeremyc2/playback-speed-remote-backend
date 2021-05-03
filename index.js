const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/*', (req, res) => {
    const { URL } = require('url'); 
    var baseURL = 'http://' + req.headers.host + '/';
    var reqUrl = new URL(req.url, baseURL);
    res.sendFile(__dirname + reqUrl.pathname);
});

io.on('connection', (socket) => {
  socket.on('join-room', id => {
    socket.join(id);
  });
  socket.on('change-speed', speed => {
    var room = [...socket.rooms][1];
    if(room != null) {
      io.to(room).emit('change-speed', speed);
    }
  });
  socket.on('skip-back', () => {
    var room = [...socket.rooms][1];
    if(room != null) {
      io.to(room).emit('skip-back');
    }
  });
  socket.on('play-pause', () => {
    var room = [...socket.rooms][1];
    if(room != null) {
      io.to(room).emit('play-pause');
    }
  });
  socket.on('skip-forward', () => {
    var room = [...socket.rooms][1];
    if(room != null) {
      io.to(room).emit('skip-forward');
    }
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});