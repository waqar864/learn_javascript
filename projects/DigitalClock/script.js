const Clock = document.getElementById('clock');



setInterval(() => {
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    Clock.innerText = date.toLocaleTimeString();
}, 1000);