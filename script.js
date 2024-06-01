document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById('music');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeControl = document.getElementById('volume');

    playPauseBtn.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            playPauseBtn.innerHTML = '<i class="fas fa-volume-up"></i>'; // Ícone de áudio silenciado
        } else {
            music.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-volume-mute"></i>'; // Ícone de volume
        }
    });

    volumeControl.addEventListener('input', function() {
        music.volume = volumeControl.value;
    });

    music.loop = true; // Adicionando loop para a música
});
