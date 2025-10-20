import { lastest } from "../aplication/html_elements.js";
import *as elements from"./aplication/html_elements.js";


const songs = [
        {
            song_name : "cancion CHIDA",
            artist_name: "artista 1",
            song_url: "./media/song.mp3",
            caratula: "https://picsum.photos/200"
        },
        {
            song_name : "cancion CHIDA 2",
            artist_name: "artista 1",
            song_url: "./media/song_2.mp3",
            caratula: "https://picsum.photos/200"
        },
        {
            song_name : "cancion CHIDA 3",
            artist_name: "artista 3",
            song_url: "./media/song_3.mp3",
            caratula: "https://picsum.photos/200"
        },
    ];

lastest

function loadSong(i){
    const title = document.getElementById("title");
    const artist = document.getElementById("artist");

    const now = songs[i];

    media.src = now.song_url;
    title.innerText = now.song_name;
    artist.innerText = now.artist_name;
    song_img.src = now.caratula;
}




elements.media.addEventListener('mediaupdate', function() {
    const progress_value = (this.currentTime / this.duration)*100;
    progress_bar.value = progress_value;
});

elements.media.ontimeupdate = function updateProgressBar() {
    const progress_value = (this.currentTime / this.duration) * 100;
    progress_bar.value = progress_value;
}





elements.progress_bar.oninput = function() {
    media.currentTime = (this.value/100) * media.duration;
}

elements.play_btn.addEventListener("click", playPause);


