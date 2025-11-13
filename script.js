document.addEventListener("DOMContentLoaded", function() {
    const musicaBG = document.getElementById('background-music');
    const ponerMusica = musicaBG.play();

    if (ponerMusica !== undefined) {
        ponerMusica.then(() => {
            console.log("Reproducción automática de música iniciada.");
        }).catch(error => {
            console.log("La reproducción automática fue bloqueada.", error);
            const iniciarMusica = () => {
                musicaBG.play().then(() => {
                    console.log("Música reproducida tras la interacción del usuario.");
                    document.removeEventListener('click', iniciarMusica);
                    document.removeEventListener('keydown', iniciarMusica);
                }).catch(err => {
                    console.log("Error al intentar reproducir la música tras la interacción del usuario.", err);
                });
            };

            document.addEventListener('click', iniciarMusica);
            document.addEventListener('keydown', iniciarMusica);
        });
    }

    musicaBG.volume = 0.5;

    const elementoContador = document.getElementById('countdown');
    const targetDate = new Date('December 6, 2025 18:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            elementoContador.innerHTML = "Es hora de Lucbacher";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        elementoContador.innerHTML = `
            ${days} : ${hours} : ${minutes} : ${seconds}
        `;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});