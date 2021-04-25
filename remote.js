var socket = io();

remote.querySelectorAll('button.speed').forEach((button, i) => {
    button.addEventListener('click', () => {
      socket.emit('change speed', i);
    });
});