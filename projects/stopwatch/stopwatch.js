const container = document.getElementById("container");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const seconds = document.getElementById("seconds");
const tens = document.getElementById("tens");
window.addEventListener("load", stopWatch);



function stopWatch() {

    startBtn.addEventListener("click", start)
    stopBtn.addEventListener("click", stop)
    resetBtn.addEventListener("click", reset)

    let s = 0;
    let miliS = 0;

    function display() {
        // s = (s < 10) ? "0" + s : s;
        miliS = (miliS < 10) ? "0" + miliS : miliS;
        seconds.innerHTML = s;
        tens.innerHTML = miliS;
    }
    display();

    function start() {
        display()
        if (miliS >= 99) {
            miliS = 0
            s++
        }
        miliS++;
        id = setTimeout(start, 10)
    }

    function stop() {
        clearTimeout(id)
    }

    function reset() {
        stop()
        s = 0;
        miliS = 0;
        display()
    }
}