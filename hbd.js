const birthdayImg = document.getElementById('birthdayImg');
let audio;

birthdayImg.addEventListener('click', () => {
    createFlowers(); // Show flowers (confetti)
    bounceImage(); // Make the image bounce
    if (!audio) {
        playAudio(); // Play the audio if not already playing
    }
});

function createFlowers() {
    const numFlowers = 100; // Number of flowers
    const container = document.createElement('div');
    container.className = 'flower-container';
    document.body.appendChild(container);

    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        container.appendChild(flower);
        
        const size = Math.random() * 20 + 10; // Random size between 10 and 30
        flower.style.width = size + 'px';
        flower.style.height = size + 'px';
        flower.style.backgroundColor = randomColor();
        
        const animationDuration = Math.random() * 3 + 2; // Random duration between 2 and 5 seconds
        flower.style.animation = `fall ${animationDuration}s linear infinite`;
        
        const startPosition = Math.random() * window.innerWidth; // Random start position along the width of the window
        flower.style.left = startPosition + 'px';
    }

    // Stop flowers after 5 seconds
    setTimeout(() => {
        document.body.removeChild(container);
    }, 10000);
}

function randomColor() {
    const colors = ['#8A2BE2', '#FF69B4', '#FFD700', '#32CD32', '#1E90FF', '#FF6347'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function bounceImage() {
    birthdayImg.style.animation = 'bounce 0.5s ease infinite alternate'; // Apply bounce animation to the image
}

function playAudio() {
    audio = new Audio('hbd.mp3'); // Create new audio element
    audio.play(); // Play the audio
}
