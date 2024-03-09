let clock = document.querySelector("#clock");

// create an interval to update the time
setInterval(() => {
    clock.innerHTML = new Date().toLocaleTimeString();
}, 1000);