var socket = io();

socket.on('disconnect', function() {
    console.log('disconnected');
});

socket.on('connect', function() {
    console.log('connected');

    const id = new URLSearchParams(document.location.search).get("id");
    socket.emit('join-room', id);

    setInterval(() => {
        window.parent.postMessage({type: "connection-test"}, "*");
    }, 1000);
    
});

socket.on('change-speed', function(speed) {
    console.log('change-speed ' + speed);
    window.parent.postMessage({type: "change-speed", speed}, "*");
});

socket.on('skip-back', function() {
    console.log('skip-back');
    window.parent.postMessage({type: "skip-back"}, "*");
});

socket.on('play-pause', function() {
    console.log('play-pause');
    window.parent.postMessage({type: "play-pause"}, "*");
});

socket.on('skip-forward', function() {
    console.log('skip-forward');
    window.parent.postMessage({type: "skip-forward"}, "*");
});