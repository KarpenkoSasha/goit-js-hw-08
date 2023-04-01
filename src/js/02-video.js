import Player from "@vimeo/player";
const throttle = require("lodash.throttle");

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);    
    
load = () => {

    if (localStorage.getItem("videoplayer-current-time")) {
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
    } else {
        player.setCurrentTime(0);
    }
};

player.on('timeupdate', throttle(timeStop, 1000));

function timeStop({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds);
};
