window.onload = function () {

    // Declare variables
    let container = document.querySelector("#container");
    let letHimChoose = document.querySelector("#letHimChoose");
    let letHimChooseContainer = document.querySelector("#letHimChoose-container");
    letHimChoose.style.display = "none";
    let chooseBtn = document.getElementsByClassName("chooseBtn");
    let user = "";
    let system = "";
    let boxes = document.getElementsByClassName("grid-item");
    let row1 = document.getElementsByClassName("row1");
    let row2 = document.getElementsByClassName("row2");
    let row3 = document.getElementsByClassName("row3");
    let column1 = document.getElementsByClassName("column1");
    let column2 = document.getElementsByClassName("column2");
    let column3 = document.getElementsByClassName("column3");
    let x1 = document.getElementsByClassName("x1");
    let x2 = document.getElementsByClassName("x2");
    let winSpan = document.querySelector("#winSpan");

    let emptyBoxes = [];

    // show window to choose

    setTimeout(chooseSign, 500)

    function chooseSign() {
        container.style.opacity = "0.5"
        letHimChoose.style.display = "";
        for (b of chooseBtn) {
            b.addEventListener("click", function () {
                user = this.innerHTML;
                if (user == "x") {
                    system = "o"
                } else {
                    system = "x"
                }

                function goodLuck() {
                    letHimChoose.innerHTML = "";
                    let lucky = document.createElement("h1");
                    lucky.appendChild(document.createTextNode("Good Luck"))
                    letHimChoose.appendChild(lucky);
                }
                goodLuck();

                setTimeout(disapear, 1000);

                function disapear() {
                    container.style.opacity = "1"
                    letHimChooseContainer.style.display = "none";
                }

                function firstFill() {
                    let randomFirstbox = boxes[Math.floor(Math.random() * 10)]
                    randomFirstbox.innerHTML = system;
                    randomFirstbox.disabled = "true";

                    for (let i = 0; i < boxes.length; i++) {
                        if (boxes[i].innerHTML == "") {
                            emptyBoxes.push(i)
                        }
                    }
                }
                firstFill();
                console.log(emptyBoxes);

                for (let b of boxes) {
                    b.addEventListener("click", function () {

                        this.innerHTML = user;
                        this.disabled = true;

                        function winOrLose() {
                            // checker: {
                            { // checking row 1
                                let m = "";
                                for (let i = 0; i < row1.length; i++) {
                                    if (row1[i].innerHTML == user) {
                                        m += "u";
                                    }
                                    if (row1[i].innerHTML == system) {
                                        m += "s";
                                    }
                                }
                                if (m.length == 3 && m.indexOf("u") == -1) {
                                    for (let s of row1) {
                                        s.style.backgroundColor = "#e35d6a";
                                        winSpan.innerHTML = "System Wins";
                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";
                                    // break checker;

                                }
                                if (m.length == 3 && m.indexOf("s") == -1) {
                                    for (let s of row1) {
                                        s.style.backgroundColor = "#20c997";
                                        winSpan.innerHTML = "User Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                            } { // checking row 2
                                let m = "";
                                for (let i = 0; i < row2.length; i++) {
                                    if (row2[i].innerHTML == user) {
                                        m += "u";
                                    }
                                    if (row2[i].innerHTML == system) {
                                        m += "s";
                                    }
                                }
                                if (m.length == 3 && m.indexOf("u") == -1) {
                                    for (let s of row2) {
                                        s.style.backgroundColor = "#e35d6a";
                                        winSpan.innerHTML = "System Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                                if (m.length == 3 && m.indexOf("s") == -1) {
                                    for (let s of row2) {
                                        s.style.backgroundColor = "#20c997";
                                        winSpan.innerHTML = "User Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                            } { // checking row 3
                                let m = "";
                                for (let i = 0; i < row3.length; i++) {
                                    if (row3[i].innerHTML == user) {
                                        m += "u";
                                    }
                                    if (row3[i].innerHTML == system) {
                                        m += "s";
                                    }
                                }
                                if (m.length == 3 && m.indexOf("u") == -1) {
                                    for (let s of row3) {
                                        s.style.backgroundColor = "#e35d6a";
                                        winSpan.innerHTML = "System Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                                if (m.length == 3 && m.indexOf("s") == -1) {
                                    for (let s of row3) {
                                        s.style.backgroundColor = "#20c997";
                                        winSpan.innerHTML = "User Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                            } { // checking column 1
                                let m = "";
                                for (let i = 0; i < column1.length; i++) {
                                    if (column1[i].innerHTML == user) {
                                        m += "u";
                                    }
                                    if (column1[i].innerHTML == system) {
                                        m += "s";
                                    }
                                }
                                if (m.length == 3 && m.indexOf("u") == -1) {
                                    for (let s of column1) {
                                        s.style.backgroundColor = "#e35d6a";
                                        winSpan.innerHTML = "System Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                                if (m.length == 3 && m.indexOf("s") == -1) {
                                    for (let s of column1) {
                                        s.style.backgroundColor = "#20c997";
                                        winSpan.innerHTML = "User Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                            } { // checking column 2
                                let m = "";
                                for (let i = 0; i < column2.length; i++) {
                                    if (column2[i].innerHTML == user) {
                                        m += "u";
                                    }
                                    if (column2[i].innerHTML == system) {
                                        m += "s";
                                    }
                                }
                                if (m.length == 3 && m.indexOf("u") == -1) {
                                    for (let s of column2) {
                                        s.style.backgroundColor = "#e35d6a";
                                        winSpan.innerHTML = "System Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                                if (m.length == 3 && m.indexOf("s") == -1) {
                                    for (let s of column2) {
                                        s.style.backgroundColor = "#20c997";
                                        winSpan.innerHTML = "User Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                            } { // checking column 3
                                let m = "";
                                for (let i = 0; i < column3.length; i++) {
                                    if (column3[i].innerHTML == user) {
                                        m += "u";
                                    }
                                    if (column3[i].innerHTML == system) {
                                        m += "s";
                                    }
                                }
                                if (m.length == 3 && m.indexOf("u") == -1) {
                                    for (let s of column3) {
                                        s.style.backgroundColor = "#e35d6a";
                                        winSpan.innerHTML = "System Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                                if (m.length == 3 && m.indexOf("s") == -1) {
                                    for (let s of column3) {
                                        s.style.backgroundColor = "#20c997";
                                        winSpan.innerHTML = "User Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                            } { // checking x1
                                let m = "";
                                for (let i = 0; i < x1.length; i++) {
                                    if (x1[i].innerHTML == user) {
                                        m += "u";
                                    }
                                    if (x1[i].innerHTML == system) {
                                        m += "s";
                                    }
                                }
                                if (m.length == 3 && m.indexOf("u") == -1) {
                                    for (let s of x1) {
                                        s.style.backgroundColor = "#e35d6a";
                                        winSpan.innerHTML = "System Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                                if (m.length == 3 && m.indexOf("s") == -1) {
                                    for (let s of x1) {
                                        s.style.backgroundColor = "#20c997";
                                        winSpan.innerHTML = "User Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                            } { // checking x2
                                let m = "";
                                for (let i = 0; i < x2.length; i++) {
                                    if (x2[i].innerHTML == user) {
                                        m += "u";
                                    }
                                    if (x2[i].innerHTML == system) {
                                        m += "s";
                                    }
                                }
                                if (m.length == 3 && m.indexOf("u") == -1) {
                                    for (let s of x2) {
                                        s.style.backgroundColor = "#e35d6a";
                                        winSpan.innerHTML = "System Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                                if (m.length == 3 && m.indexOf("s") == -1) {
                                    for (let s of x2) {
                                        s.style.backgroundColor = "#20c997";
                                        winSpan.innerHTML = "User Wins";

                                    }
                                    for (let d of boxes) {
                                        d.disabled = true;
                                    }
                                    return "finish";

                                    // break checker;
                                }
                            }

                            // } // label
                        }
                        winOrLose();

                        function se() {
                            if (winOrLose() != "finish") {
                                emptyBoxes.length = 0;
                                for (let i = 0; i < boxes.length; i++) {
                                    if (boxes[i].innerHTML == "") {
                                        emptyBoxes.push(i)
                                    }
                                }
                                let randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)]
                                boxes[randomBox].innerHTML = system;
                                for (let d of boxes) {
                                    if (d.innerHTML !== "") {
                                        d.disabled = true
                                    }
                                }
                                winOrLose();
                            }
                        }
                        se();

                    })
                }
            })
        }
    }
}