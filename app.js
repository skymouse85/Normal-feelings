const audio = document.getElementById("NF_BG-audio");
const video = document.getElementById("NF_BG-video");
const gate = document.getElementById("sound-gate");

async function attemptAutoplay() {
    try {
        await video.play();
    }   catch (e) {}
    
    try {
        audio.volume = 0.9;
        await audio.play();
        gate.classList.add("hidden");
    }   catch (e) {
        gate.classList.remove("hidden")
    }
}

function unlockAudio() {
    audio   
        .play()
        .then(() => gate.classList.add(hidden))
        .catch(() => {})
}

attemptAutoplay();

window.addEventListener("pointerdown", unlockAudio, {once: true});
gate.addEventListener("click", unlockAudio);