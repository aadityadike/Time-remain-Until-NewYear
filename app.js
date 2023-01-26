const newYear = "1 jan 2024";
function timer() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const milliseconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(milliseconds / 3600 / 24);
    const hours = Math.floor(milliseconds / 3600) % 24;
    const minutes = Math.floor(milliseconds / 60) % 60;
    const seconds = Math.floor(milliseconds) % 60;


    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // console.log(days,hours,minutes,seconds);
}

timer();
setInterval(timer, 1000);


