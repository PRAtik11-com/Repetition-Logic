let hour = 0
let min = 0
let sec = 0
let time = document.getElementById('time')
let timers

function newsome() {
    sec++
    if(sec==60){
        sec = 0
        min++
        if(min == 60){
            min = 0
            hour++
        }
    }
    let hrs = (hour < 10 ? "0" : " ") + hour
    let mins = (min < 10 ? "0" : " ") + min
    let secs = (sec < 10 ? "0" : " ") + sec
    time.innerHTML = hrs + ":" + mins + ":" +secs
}

function startf() {
    if (timers !== null) {
        clearInterval(timers)
    }
    timers = setInterval(newsome, 1000)
}

function stopf(){
    clearInterval(timers)
}

function restartf() {
    clearInterval(timers)
    hour = 0
    min = 0
    sec = 0
    time.innerHTML= "00:00:00"
}