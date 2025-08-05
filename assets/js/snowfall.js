// assets/js/snowfall.js
function createSnowflakes() {
    const snowfall = document.querySelector('.snowfall');
    const count = 50; // Number of snowflakes
    for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.width = `${Math.random() * 5 + 2}px`;
        snowflake.style.height = snowflake.style.width;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowfall.appendChild(snowflake);
    }
}
window.onload = createSnowflakes;
