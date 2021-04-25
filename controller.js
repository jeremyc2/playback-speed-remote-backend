var socket = io();

socket.on('change speed', function(speed) {
    window.parent.postMessage(speed, "*");
    document.body.innerHTML = speed;
});