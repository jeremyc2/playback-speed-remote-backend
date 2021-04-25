var socket = io();

remote.querySelectorAll('button.speed').forEach((button, i) => {
    button.addEventListener('click', () => {
      socket.emit('change-speed', i + 1);
    });
    button.onclick = () => false;
});

remote.skipBack.addEventListener('click', () => {
  socket.emit('skip-back');
});
remote.skipBack.onclick = () => false;

remote.playPause.addEventListener('click', () => {
  socket.emit('play-pause');
});
remote.playPause.onclick = () => false;

remote.skipForward.addEventListener('click', () => {
  socket.emit('skip-forward');
});
remote.skipForward.onclick = () => false;