let currentSong = null;
let videoPlayer = document.getElementById('main-video-player');
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

    videoPlayer.src = src;
    videoPlayer.play();

    // Update now playing
    npThumbnail.src = image;
    npTitle.textContent = title;
    npArtist.textContent = artist;
    nowPlaying.style.display = 'flex';

    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

playPauseBtn.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        if (currentSong) {
            currentSong.querySelector('.play-btn').innerHTML = '<i class="fas fa-pause"></i>';
        }
    } else {
        videoPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        if (currentSong) {
            currentSong.querySelector('.play-btn').innerHTML = '<i class="fas fa-play"></i>';
        }
    }
});

videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;
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
    const duration = videoPlayer.duration;
    videoPlayer.currentTime = (clickX / width) * duration;
});

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

videoPlayer.addEventListener('ended', () => {
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    if (currentSong) {
        currentSong.querySelector('.play-btn').innerHTML = '<i class="fas fa-play"></i>';
        currentSong.classList.remove('playing');
    }
    currentSong = null;
    nowPlaying.style.display = 'none';
});