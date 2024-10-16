function updateClock() {
    // Create a new Date object in Spain's time zone
    const options = { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const now = new Intl.DateTimeFormat('en-GB', options).format(new Date());

    // Display the time
    document.getElementById('clock').innerText = now;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
