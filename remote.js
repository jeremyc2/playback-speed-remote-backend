var socket = io();
socket.on("connect", () => {
  console.log(socket.id);
});

const id = new URLSearchParams(document.location.search).get("id");

remote.querySelectorAll('button.speed').forEach((button, i) => {
    button.addEventListener('click', () => {
      socket.emit('change-speed', i + 1);
    });
    button.addEventListener("click", function() {
        var buttonWithHighlight = remote.querySelector("button.speed.highlight");

        if(buttonWithHighlight) {
          buttonWithHighlight.classList.remove("highlight");
        }

        this.classList.add("highlight");
    });
    button.onclick = () => false;
});

remote.skipBack.addEventListener('click', function() {
  socket.emit('skip-back');

  this.classList.add("highlight");
  setTimeout(() => {
    this.classList.remove("highlight");
  }, 250)
});
remote.skipBack.onclick = () => false;

remote.playPause.addEventListener('click', function() {
  socket.emit('play-pause');

  this.classList.add("highlight");
  setTimeout(() => {
    this.classList.remove("highlight");
  }, 250)
});
remote.playPause.onclick = () => false;

remote.skipForward.addEventListener('click', function() {
  socket.emit('skip-forward');

  this.classList.add("highlight");
  setTimeout(() => {
    this.classList.remove("highlight");
  }, 250)
});
remote.skipForward.onclick = () => false;
