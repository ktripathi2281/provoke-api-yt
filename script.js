
const apiKey = 'AIzaSyAkrc8_od3g1s89e5R0khiMEttpD3meJWs';
const script = document.createElement('script');
script.src = `https://www.youtube.com/iframe_api?api_key=${apiKey}`;
document.head.appendChild(script);

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'fs': 1,
            'modestbranding': 1,
        },
        events: {
            'onReady': onVideo,
            'onStateChange': onStateChangePlayer
        }
    });
}

function onVideo(event) {
    // Player is ready
}

function onStateChangePlayer(event) {
    // Handle player state changes if needed
}

function loadVideo() {
    const videoId = document.getElementById('videoId').value;
    if (videoId) {
        player.loadVideoById(videoId);
    } else {
        alert('Please enter a valid YouTube Video ID.');
    }
}
