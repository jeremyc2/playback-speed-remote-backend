var socket = io();

socket.on('change-speed', function(speed) {
    window.parent.postMessage({type: "change-speed", speed}, "*");
    document.body.innerHTML = speed;
});