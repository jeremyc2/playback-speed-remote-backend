var socket = io();

socket.on('change speed', function(speed) {
    window.speed = speed;
    document.body.innerHTML = speed;
});