import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const SAVED_TIME = "videoplayer-current-time"  
const onPlay = data => {localStorage.setItem(SAVED_TIME, JSON.stringify(data.seconds));};
player.on('timeupdate', throttle(onPlay, 1000));
const currentTime = JSON.parse(localStorage.getItem(SAVED_TIME)) 
if (currentTime) {
  player.setCurrentTime(currentTime);
}


