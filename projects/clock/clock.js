const container = document.getElementById("container")

setInterval(clock, 1000)

function clock() {
    let d = new Date()
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let session = "am";
    // New *
    if (h == 0) {
        h = 12
    }
    if (h >= 12) {
        session = "pm"
    }
    if (h >= 13) {
        h -= 12
    }
    // New *
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    container.innerHTML = `${h}:${m}:${s} ${session}`
    setTimeout(clock, 1000)

}