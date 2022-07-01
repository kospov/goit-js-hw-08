import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));

player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then((seconds) => {
        localStorage.setItem(LOCALSTORAGE_KEY, seconds);
    });
}, 1000)
);