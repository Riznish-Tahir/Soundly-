let currentSong = null;
let audioPlayer = document.getElementById('audio-player');
let nowPlaying = document.getElementById('now-playing');
let npThumbnail = document.getElementById('np-thumbnail');
let npTitle = document.getElementById('np-title');
let npArtist = document.getElementById('np-artist');
let playPauseBtn = document.getElementById('play-pause-btn');
let progressBar = document.getElementById('progress-bar');
let progress = document.getElementById('progress');
let currentTimeEl = document.getElementById('current-time');
let durationEl = document.getElementById('duration');

document.querySelectorAll('.song-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        playSong(item, index);
    });
});

function playSong(songItem, index) {
    const src = songItem.dataset.src;
    const title = songItem.dataset.title;
    const artist = songItem.dataset.artist;
    const image = songItem.dataset.image;

    if (currentSong) {
        currentSong.querySelector('.play-btn').innerHTML = '<i class="fas fa-play"></i>';
        currentSong.classList.remove('playing');
    }

    currentSong = songItem;
    songItem.classList.add('playing');
    songItem.querySelector('.play-btn').innerHTML = '<i class="fas fa-pause"></i>';

    audioPlayer.src = src;
    audioPlayer.play();

    // Update now playing
    npThumbnail.src = image;
    npTitle.textContent = title;
    npArtist.textContent = artist;
    nowPlaying.style.display = 'flex';

    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        if (currentSong) {
            currentSong.querySelector('.play-btn').innerHTML = '<i class="fas fa-pause"></i>';
        }
    } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        if (currentSong) {
            currentSong.querySelector('.play-btn').innerHTML = '<i class="fas fa-play"></i>';
        }
    }
});

audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = progressPercent + '%';
        currentTimeEl.textContent = formatTime(currentTime);
        durationEl.textContent = formatTime(duration);
    }
});

progressBar.addEventListener('click', (e) => {
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
});

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

audioPlayer.addEventListener('ended', () => {
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    if (currentSong) {
        currentSong.querySelector('.play-btn').innerHTML = '<i class="fas fa-play"></i>';
        currentSong.classList.remove('playing');
    }
    currentSong = null;
    nowPlaying.style.display = 'none';
});