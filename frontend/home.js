const artist = gsap.utils.toArray(".artist");

  // initial stacked state
  artist.forEach((card, i) => {
    gsap.set(card, {
      x: 0,
      y: 0,
      rotation: gsap.utils.random(-6, 6),
      scale: 0.9,
      zIndex: i
    });
  });

  // open / fan-out animation
  gsap.timeline({ delay: 0.5 })
    .to(artist, {
      x: i => gsap.utils.random(-300, 300),
      y: i => gsap.utils.random(-180, 180),
      rotation: i => gsap.utils.random(-25, 25),
      scale: 1,
      duration: 2,
      ease: "expo.out",
      stagger: {
        each: 0.08,
        from: "center"
      }
    });
    const icons = [
    "fa-music",
    "fa-headphones",
    "fa-microphone",
    "fa-guitar",
    "fa-drum",
    "fa-record-vinyl"
  ];

  const colors = ["#616161", "#c7c7c7", "#ffffff"];
  const container = document.getElementById("icon-container");

  function createIcon() {
    const icon = document.createElement("i");
    icon.className = `fa-solid ${icons[Math.floor(Math.random() * icons.length)]} music-icon`;

    icon.style.left = Math.random() * window.innerWidth + "px";
    icon.style.fontSize = Math.random() * 18 + 20 + "px";
    icon.style.animationDuration = Math.random() * 3 + 3 + "s";
    icon.style.color = colors[Math.floor(Math.random() * colors.length)];
    icon.style.opacity = Math.random() * 0.4 + 0.6;

    container.appendChild(icon);

    setTimeout(() => icon.remove(), 7000);
  }

  window.addEventListener("load", () => {
    for (let i = 0; i < 30; i++) {
      setTimeout(createIcon, i * 120);
    }
  });

    const area = document.getElementById('parallax');
  const items = document.querySelectorAll('.item');

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  area.addEventListener('mousemove', e => {
    const rect = area.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 1.6;
mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 1.6;

  });

  function animate() {
    currentX += (mouseX - currentX) * 0.10;
    currentY += (mouseY - currentY) * 0.10;

    items.forEach(item => {
      const depth = item.dataset.depth;
      const intensity = 3; 

item.style.transform = `
  translate3d(
    ${currentX * depth * intensity}px,
    ${currentY * depth * intensity}px,
    0
  )
`;

    });

    requestAnimationFrame(animate);
  }

  animate();

  const speaker = document.getElementById('speakerBtn');
const wrap = document.getElementById('speakerWrap');

speaker.addEventListener('click', ()=>{
  wrap.classList.toggle('active');
});

// Select the speaker card and audio
const speakerCard = document.querySelector(".speaker-card");
const speakerAudio = document.getElementById("speakerAudio");

// Toggle play/pause when speaker is clicked
speakerCard.addEventListener("click", () => {
  if (speakerAudio.paused) {
    speakerAudio.play();
    speakerCard.classList.add("playing");
  } else {
    speakerAudio.pause();
    speakerCard.classList.remove("playing");
  }
});

// latestsong

const progress = document.getElementById("musicProgress1");
    const song = document.getElementById("song");
    const controlIcon = document.getElementById("controlIcon");
    const playPauseButton = document.querySelector(".play-pause-btn");
    const songName = document.querySelector(".music-player h1");
    const artistName = document.querySelector(".music-player p");

    const songs = [
      { title: "Symphony", name: "Clean Bandit ft. Zara Larsson", source: "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Clean-Bandit-Symphony.mp3" },
      { title: "Pawn It All", name: "Alicia Keys", source: "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Pawn-It-All.mp3" },
      { title: "Seni Dert Etmeler", name: "Madrigal", source: "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Madrigal-Seni-Dert-Etmeler.mp3" },
      { title: "Instant Crush", name: "Daft Punk ft. Julian Casablancas", source: "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Daft-Punk-Instant-Crush.mp3" }
    ];

    let currentSongIndex = 0;

    function updateSongInfo() {
      songName.textContent = songs[currentSongIndex].title;
      artistName.textContent = songs[currentSongIndex].name;
      song.src = songs[currentSongIndex].source;
    }

    function playSong() {
      song.play();
      controlIcon.classList.add("fa-pause");
      controlIcon.classList.remove("fa-play");
    }

    function pauseSong() {
      song.pause();
      controlIcon.classList.remove("fa-pause");
      controlIcon.classList.add("fa-play");
    }

    playPauseButton.addEventListener("click", () => song.paused ? playSong() : pauseSong());

    song.addEventListener("timeupdate", () => {
      if (!song.paused) progress.value = song.currentTime;
    });

    song.addEventListener("loadedmetadata", () => { progress.max = song.duration; });

    progress.addEventListener("input", () => { song.currentTime = progress.value; });
    progress.addEventListener("change", playSong);

    // SWIPER
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 40,
  resistanceRatio: 0.85,
  touchStartPreventDefault: false,
  simulateTouch: true,
  threshold: 5,
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});


    // 🔑 When Swiper changes, update song
    swiper.on("slideChange", () => {
      currentSongIndex = swiper.activeIndex;
      updateSongInfo();
      playSong();
    });

    // 🔑 Song ends → next slide
    song.addEventListener("ended", () => { swiper.slideNext(); });

    // Init
    updateSongInfo();
    ScrollTrigger.normalizeScroll(true);

