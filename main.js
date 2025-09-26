// Globe initialization
let globe;
let selectedCountry = null;
let currentWeatherSound = null;

// Initialize the globe when page loads
window.addEventListener('load', () => {
    initGlobe();
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 2000);
});

function initGlobe() {
    // Create globe instance
    globe = Globe()
        (document.getElementById('globe-container'))
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .showAtmosphere(true)
        .atmosphereColor('lightskyblue')
        .atmosphereAltitude(0.25)
        .pointsData(countriesData)
        .pointLat(d => d.lat)
        .pointLng(d => d.lng)
        .pointColor(() => '#ffffff')
        .pointAltitude(0.01)
        .pointRadius(0.5)
        .pointLabel(d => `
            <div style="background: rgba(255,255,255,0.9); padding: 5px 10px; border-radius: 5px; color: #333;">
                <strong>${d.name}</strong><br>
                <small>${d.capital}</small>
            </div>
        `)
        .onPointClick(point => {
            selectCountry(point);
        })
        .enablePointerInteraction(true);

    // Set initial camera position
    globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });

    // Auto-rotate globe
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
}

function selectCountry(country) {
    selectedCountry = country;
    
    // Zoom in on the selected country
    globe.pointOfView({
        lat: country.lat,
        lng: country.lng,
        altitude: 0.3
    }, 1500);

    // Transition to weather view after zoom
    setTimeout(() => {
        showWeatherView(country);
    }, 1500);
}

function showWeatherView(country) {
    // Fade out globe
    document.getElementById('globe-container').classList.add('fade-out');
    
    // Load weather data
    loadWeatherData(country);
    
    // Show weather view
    setTimeout(() => {
        const weatherView = document.getElementById('weather-view');
        weatherView.classList.remove('hidden');
        setTimeout(() => {
            weatherView.classList.add('show');
        }, 50);
    }, 800);
}

function backToGlobe() {
    // Stop current weather sound
    stopWeatherSound();
    
    // Fade out weather view
    const weatherView = document.getElementById('weather-view');
    weatherView.classList.remove('show');
    
    setTimeout(() => {
        weatherView.classList.add('hidden');
        // Clear weather animations
        document.getElementById('weather-background').className = 'weather-background';
        document.getElementById('weather-background').innerHTML = '';
        
        // Show globe again
        document.getElementById('globe-container').classList.remove('fade-out');
        
        // Reset globe position
        globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 1000);
    }, 1000);
}

async function loadWeatherData(country) {
    const locationEl = document.getElementById('location-name');
    const tempEl = document.getElementById('current-temp');
    const conditionEl = document.getElementById('weather-condition');
    const feelsLikeEl = document.getElementById('feels-like');
    const humidityEl = document.getElementById('humidity');
    const windSpeedEl = document.getElementById('wind-speed');

    locationEl.textContent = country.capital;
    
    // Simulated weather data (replace with real API in production)
    const weatherTypes = ['clear', 'clouds', 'rain', 'snow', 'thunderstorm', 'mist'];
    const randomWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    const temp = Math.floor(Math.random() * 30) - 5;
    const humidity = Math.floor(Math.random() * 40) + 40;
    const windSpeed = (Math.random() * 10).toFixed(1);
    const feelsLike = temp + Math.floor(Math.random() * 5) - 2;
    
    // Update UI with weather data
    tempEl.textContent = `${temp}°`;
    feelsLikeEl.textContent = `${feelsLike}°`;
    humidityEl.textContent = `${humidity}%`;
    windSpeedEl.textContent = `${windSpeed} m/s`;
    
    // Update weather description
    const weatherDescriptions = {
        clear: '맑음',
        clouds: '구름 많음',
        rain: '비',
        snow: '눈',
        thunderstorm: '천둥번개',
        mist: '안개'
    };
    
    conditionEl.textContent = weatherDescriptions[randomWeather];
    
    // Apply weather animation and ambient sound
    applyWeatherEffect(randomWeather);
}

function applyWeatherEffect(weatherType) {
    const background = document.getElementById('weather-background');
    
    // Clear previous animations
    background.innerHTML = '';
    background.className = `weather-background ${weatherType}`;
    
    // Stop previous sound and play new ambient sound
    stopWeatherSound();
    playWeatherSound(weatherType);
    
    // Add weather-specific animations
    switch(weatherType) {
        case 'clear':
            // Sunny day - subtle light rays
            createSunRays(background);
            break;
            
        case 'clouds':
            // Cloudy - floating clouds
            createClouds(background);
            break;
            
        case 'rain':
            // Rain - falling raindrops
            createRain(background);
            break;
            
        case 'snow':
            // Snow - falling snowflakes
            createSnow(background);
            break;
            
        case 'thunderstorm':
            // Thunderstorm - rain with occasional lightning
            createRain(background);
            createLightning(background);
            break;
            
        case 'mist':
            // Mist - fog effect
            createFog(background);
            break;
    }
}

function createSunRays(container) {
    // Create subtle animated sun rays
    const sunContainer = document.createElement('div');
    sunContainer.style.cssText = `
        position: absolute;
        top: -10%;
        right: -10%;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(255, 255, 200, 0.3), transparent);
        animation: pulse 4s ease-in-out infinite;
    `;
    container.appendChild(sunContainer);
}

function createClouds(container) {
    for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        cloud.className = `cloud cloud${(i % 2) + 1}`;
        cloud.style.left = `${Math.random() * 100}%`;
        cloud.style.animationDelay = `${Math.random() * 10}s`;
        cloud.style.animationDuration = `${20 + Math.random() * 10}s`;
        container.appendChild(cloud);
    }
}

function createRain(container) {
    for (let i = 0; i < 50; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        drop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
        container.appendChild(drop);
    }
}

function createSnow(container) {
    for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDelay = `${Math.random() * 3}s`;
        snowflake.style.animationDuration = `${3 + Math.random() * 2}s`;
        snowflake.style.fontSize = `${10 + Math.random() * 20}px`;
        container.appendChild(snowflake);
    }
}

function createLightning(container) {
    // Lightning effect is handled by CSS animation
}

function createFog(container) {
    for (let i = 0; i < 3; i++) {
        const fog = document.createElement('div');
        fog.className = 'fog';
        fog.style.animationDelay = `${i * 3}s`;
        fog.style.opacity = 0.3 + Math.random() * 0.3;
        container.appendChild(fog);
    }
}

function playWeatherSound(weatherType) {
    // Create ambient sound URLs (using free sound samples)
    // In production, replace with actual ambient sound files
    const ambientSounds = {
        clear: 'https://cdn.freesound.org/previews/316/316643_5123451-lq.mp3', // Birds chirping
        clouds: 'https://cdn.freesound.org/previews/531/531947_11261532-lq.mp3', // Gentle wind
        rain: 'https://cdn.freesound.org/previews/531/531947_11261532-lq.mp3', // Rain
        snow: 'https://cdn.freesound.org/previews/316/316643_5123451-lq.mp3', // Quiet winter
        thunderstorm: 'https://cdn.freesound.org/previews/531/531947_11261532-lq.mp3', // Storm
        mist: 'https://cdn.freesound.org/previews/316/316643_5123451-lq.mp3' // Fog horn
    };
    
    // For demo purposes, using placeholder sounds
    // In production, use actual ambient sounds
    const audio = document.getElementById('white-noise-audio');
    audio.volume = 0.3; // Keep volume low for ambient effect
    
    // Note: Real ambient sounds would be played here
    // audio.src = ambientSounds[weatherType];
    // audio.play();
}

function stopWeatherSound() {
    const audio = document.getElementById('white-noise-audio');
    audio.pause();
    audio.src = '';
}

// Handle window resize
window.addEventListener('resize', () => {
    if (globe) {
        globe.width(window.innerWidth);
        globe.height(window.innerHeight);
    }
});