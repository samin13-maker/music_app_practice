export default function(){
    window.addEventListener('DOMContentLoaded', () => {
    playingNow = player.getNextSong();
    });

    elements.lastest.addEventListener('click', function(){
        if(!last.length == 0){
            playlist.push(playingNow);
            playingNow = last.pop();
            loadSong(playingNow)
        }
    });

    elements.forward.addEventListener('click', function(){
        if(!playlist.length == 0){
            last.push(playingNow);
            playingNow = playlist.pop();
            loadSong(playingNow)
        }
    });

    elements
}