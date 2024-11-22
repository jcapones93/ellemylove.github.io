// Replace 'Girlfriend's Name' with your girlfriend's actual name
const girlfriendName = "Precious Danielle";

// Set the date of your next monthsary
const nextMonthsary = new Date("2024-05-22T00:00:00").getTime();

// Update the name
document.getElementById("name").textContent = girlfriendName;

// Countdown timer
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = nextMonthsary - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until our next monthsary!`;

    if (distance < 0) {
        countdownElement.innerHTML = "Happy Monthsary, my love!";
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Parallax effect
const parallaxLayers = document.querySelectorAll('.parallax-layer');
const parallaxContainer = document.querySelector('.parallax-container');

parallaxContainer.addEventListener('scroll', () => {
    const scrollY = parallaxContainer.scrollTop;
    parallaxLayers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const yPos = -(scrollY * speed);
        layer.style.transform = `translateY(${yPos}px)`;
    });
});

// Message reveal
const revealButton = document.getElementById("reveal-message");
const messageContainer = document.getElementById("message-container");
const loveMessage = document.getElementById("love-message");

revealButton.addEventListener("click", () => {
    messageContainer.classList.toggle("hidden");
    const paper = messageContainer.querySelector(".paper");
    paper.classList.add("open");
    setTimeout(() => paper.classList.remove("open"), 500);
    
    loveMessage.textContent = "My dearest love, every day with you is a blessing. Your smile brightens my world, your laughter fills my heart with joy, and your love gives me strength. I cherish every moment we spend together and look forward to creating countless more beautiful memories. You are my soulmate, my best friend, and my everything. Happy monthsary, my love!";
});

// Music control
document.addEventListener("DOMContentLoaded", () => {
    const musicToggle = document.getElementById("music-toggle");
    const backgroundMusic = document.getElementById("background-music");

    // Start the music automatically (muted)
    backgroundMusic.play().catch((error) => {
        console.warn("Autoplay blocked:", error);
    });

    // Toggle play/pause on button click
    musicToggle.addEventListener("click", () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            backgroundMusic.muted = false; // Unmute when user interacts
            musicToggle.textContent = "🔇";
        } else {
            backgroundMusic.pause();
            musicToggle.textContent = "🎵";
        }
    });
});

// Photo hover effect
const photos = document.querySelectorAll(".love-photo");
photos.forEach(photo => {
    photo.addEventListener("mouseover", () => {
        photo.style.transform = "scale(1.1) rotate(5deg)";
    });
    photo.addEventListener("mouseout", () => {
        photo.style.transform = "scale(1) rotate(0deg)";
    });
});

// Quiz interaction
const quizOptions = document.querySelectorAll('.quiz-option');
quizOptions.forEach(option => {
    option.addEventListener('click', () => {
        if (option.dataset.correct === 'true') {
            option.style.backgroundColor = '#4CAF50';
            option.textContent += ' ✅';
        } else {
            option.style.backgroundColor = '#f44336';
            option.textContent += ' ❌';
        }
    });
});

// Happiness check
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const bigHeart = document.getElementById('big-heart');

yesButton.addEventListener('click', () => {
    bigHeart.classList.remove('hidden');
    bigHeart.classList.add('show');
    setTimeout(() => {
        bigHeart.classList.remove('show');
        bigHeart.classList.add('hidden');
    }, 3000);
});

noButton.addEventListener('click', () => {
    noButton.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
});

// Memory lane animation
const memoryItems = document.querySelectorAll('.memory-item');
memoryItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    setTimeout(() => {
        item.style.transition = 'all 0.5s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    }, index * 500);
});

// Love Story Generator
const generateStoryButton = document.getElementById('generate-story');
const storyContainer = document.getElementById('story-container');

const storyParts = {
    beginnings: [
        "It all started when we first met at",
        "Our love story began on a beautiful day at",
        "Fate brought us together at"
    ],
    places: [
        "a cozy coffee shop",
        "a mutual friend's party",
        "the local park"
    ],
    developments: [
        "From that moment, we knew there was something special between us.",
        "We couldn't stop talking and laughing together.",
        "It felt like we had known each other for years."
    ],
    endings: [
        "And now, here we are, celebrating another beautiful monthsary together.",
        "Every day since then has been a new chapter in our amazing love story.",
        "I fall in love with you more and more with each passing day."
    ]
};

generateStoryButton.addEventListener('click', () => {
    const story = `${storyParts.beginnings[Math.floor(Math.random() * storyParts.beginnings.length)]} ${storyParts.places[Math.floor(Math.random() * storyParts.places.length)]}. ${storyParts.developments[Math.floor(Math.random() * storyParts.developments.length)]} ${storyParts.endings[Math.floor(Math.random() * storyParts.endings.length)]}`;
    storyContainer.textContent = story;
    storyContainer.style.opacity = '0';
    setTimeout(() => {
        storyContainer.style.transition = 'opacity 0.5s ease';
        storyContainer.style.opacity = '1';
    }, 100);
});

// Virtual Date Night
const newDateIdeaButton = document.getElementById('new-date-idea');
const dateActivityContainer = document.getElementById('date-activity');

const dateIdeas = [
    "Watch a romantic movie together over video call",
    "Cook the same meal together and have a virtual dinner date",
    "Take a virtual museum tour together",
    "Play an online multiplayer game as a team",
    "Read a book together and discuss it",
    "Have a karaoke night using a video call",
    "Take an online dance class together",
    "Plan your dream vacation and create a vision board"
];

newDateIdeaButton.addEventListener('click', () => {
    const idea = dateIdeas[Math.floor(Math.random() * dateIdeas.length)];
    dateActivityContainer.textContent = idea;
    dateActivityContainer.style.opacity = '0';
    setTimeout(() => {
        dateActivityContainer.style.transition = 'opacity 0.5s ease';
        dateActivityContainer.style.opacity = '1';
    }, 100);
});

// Love Calculator
const calculateLoveButton = document.getElementById('calculate-love');
const loveResult = document.getElementById('love-result');

calculateLoveButton.addEventListener('click', () => {
    const name1 = document.getElementById('name1').value.toLowerCase();
    const name2 = document.getElementById('name2').value.toLowerCase();
    
    if (name1 && name2) {
        const lovePercentage = Math.floor((name1.length + name2.length) * 7 % 101);
        loveResult.textContent = `Your love is ${lovePercentage}% strong! 💖`;
        loveResult.style.opacity = '0';
        setTimeout(() => {
            loveResult.style.transition = 'opacity 0.5s ease';
            loveResult.style.opacity = '1';
        }, 100);
    } else {
        loveResult.textContent = "Please enter both names.";
    }
});

// Future Together
const revealFutureButton = document.getElementById('reveal-future');
const futureContainer = document.getElementById('future-container');

const futurePredictions = [
    "I see us traveling the world together, hand in hand.",
    "Our future home will be filled with laughter and love.",
    "We'll build a beautiful family and create lasting memories.",
    "Our love will grow stronger with each passing year.",
    "We'll support each other's dreams and celebrate every success.",
    "Our future holds endless adventures and romantic surprises.",
    "We'll grow old together, still madly in love.",
    "Our bond will inspire others and stand the test of time."
];

revealFutureButton.addEventListener('click', () => {
    const prediction = futurePredictions[Math.floor(Math.random() * futurePredictions.length)];
    futureContainer.textContent = prediction;
    futureContainer.style.opacity = '0';
    setTimeout(() => {
        futureContainer.style.transition = 'opacity 0.5s ease';
        futureContainer.style.opacity = '1';
    }, 100);
});

