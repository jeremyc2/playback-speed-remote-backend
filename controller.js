var socket = io();

const id = new URLSearchParams(document.location.search).get("id");
socket.emit('join-room', id);

socket.on('change-speed', function(speed) {
    window.parent.postMessage({type: "change-speed", speed}, "*");
});

socket.on('skip-back', function() {
    window.parent.postMessage({type: "skip-back"}, "*");
});

socket.on('play-pause', function() {
    window.parent.postMessage({type: "play-pause"}, "*");
});

socket.on('skip-forward', function() {
    window.parent.postMessage({type: "skip-forward"}, "*");
});