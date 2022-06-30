import Player from "@vimeo/player";

const key = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let seconds = 0;
// const currentTimeValue = [];

player.on('timeupdate', function() {
    player.getCurrentTime().then(function (seconds) {

        // currentTimeValue.push(seconds);
        
        // console.log(currentTimeValue);
        // return localStorage.setItem(key, JSON.stringify(currentTimeValue));

        localStorage.setItem(key, seconds);
    });
});

// player.play('timeupdate', function() {
//     player.setCurrentTime().then(function (seconds) {
//         localStorage.getItem(key, seconds);
//     });
// });

console.log(localStorage.getItem(key, seconds));
 