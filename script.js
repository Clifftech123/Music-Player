// CALLING OF ELEMENT
const Song = document.querySelector("audio");
const PrevBtn = document.getElementById("prev");
const PlayBtn = document.getElementById("play");
const NextBtn = document.getElementById("next");

// CHECK IF IS PLAYING
let isPlaying = false;

// AUDIO PLAY FUNCTION
function PlayAudio() {
	isPlaying = true;
	//changing  the play button
	PlayBtn.classList.replace("fa-play", "fa-pause");
	PlayBtn.setAttribute("title", "Play");
	Song.play();
}

// PAUSE PLAY FUNCTION
function PlayPause() {
	isPlaying = false;
	PlayBtn.classList.replace("fa-pause", "fa-play");
	PlayBtn.setAttribute('title', "pause");
	Song.pause();
}

// PLAY OR PUSH EVENT LISTENERS
PlayBtn.addEventListener("click", () =>
	isPlaying ? PlayPause() : PlayAudio()
);
