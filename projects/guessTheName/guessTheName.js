window.onload = function () {

    // Declaring Dom Variables

    let btns = document.querySelectorAll(".btn");
    let geussIt = document.querySelector("#geussIt");
    let resultP = document.querySelector("#resultP");
    let hintImg = document.querySelector("#hintImg");

    let catPSpan = document.querySelector("#catP-Span");

    // Categories

    catObj = {
        "Footbal Players": ["ronaldo", "messi", "neymar", "xavi", "benzema", "modrich",],
        "Food": ["kebab", "egg", "bread", "fish", "tomato", "potato"],
        "Cities": ["tehran", "shiraz", "esfahan", "bushehr", "mashhad", "tabriz"],
    }

    let catNames = Object.keys(catObj);
    let chosenName = catNames[Math.floor(Math.random() * catNames.length)];
    let chosenCat = catObj[chosenName]
    let chosenWord = chosenCat[Math.floor(Math.random() * chosenCat.length)]

    // catP 

    catPSpan.innerHTML = `" ${chosenName} "`
    let stillHidden = [],
        boxes = [],
        letters = []

    // Creating letters Loop

    for (let i = 0; i < chosenWord.length; i++) {
        letters[i] = document.createElement("div")
        letters[i].innerHTML = chosenWord[i];

        boxes[i] = document.createElement("div");
        boxes[i].appendChild(letters[i]);

        geussIt.appendChild(boxes[i])

        // Styling them

        boxes[i].style.display = "inline-block"
        boxes[i].style.width = "40px"
        boxes[i].style.height = "40px"
        boxes[i].style.textAlign = "center"
        boxes[i].style.margin = "10px"
        boxes[i].style.fontSize = "40px"
        boxes[i].style.userSelect = "none"
        boxes[i].style.borderBottom = "5px solid #fff"

        letters[i].style.display = "none"

        // Letters Job

        // let matches = [];  // Used in alternative method

        let lives = 10;
        for (let b of btns) {
            b.addEventListener("click", function () {

                // Using Matches Array ***************

                // let m = "";

                // // Loop to check matches

                // for (index = 0; index < chosenWord.length; index++) {
                //     if (chosenWord[index] === j.innerHTML) {
                //         matches.push(index);
                //         m += "1";
                //     } else {
                //         m += "0";
                //     }

                // }
                // console.log(m);
                // if (m.indexOf("1") == -1) {
                //     n--
                // }
                // console.log(n);
                // resultP.innerHTML = `You have ${n} lives`;
                // // Loop to display matches


                // for (d = 0; d < matches.length; d++) {
                //     letters[matches[d]].style.display = "";
                // }


                // resultP.innerHTML = `You have ${n} lives`;

                // console.log(matches);

                // -----------------------*************

                this.disabled = true;
                this.style.opacity = "0.5";

                let m = "";

                for (l of letters) {
                    if (b.innerHTML == l.innerHTML) {
                        l.style.display = ""
                        m += "1";
                    } else {
                        m += "0"
                    }
                }

                if (m.indexOf("1") == -1) {
                    lives--;
                }

                resultP.innerHTML = `You have ${lives} lives`;

                //hint loop *********

                stillHidden.length = 0;
                for (h = 0; h < letters.length; h++) {
                    if (letters[h].style.display == "none") {
                        stillHidden.push(h)
                    }
                }


                // Win or Lose ***********

                let y = "";
                if (lives < 1) {
                    resultP.innerHTML = `Game Over`;
                    resultP.style.backgroundColor = "red";
                    for (d of btns) {
                        d.disabled = true
                        d.style.opacity = "0.5";
                    }
                };

                letters.forEach(v => {
                    if (v.style.display == "none") {
                        y += "0";
                    } else {
                        y += "1";
                    }
                })
                if (y.indexOf("0") == -1) {
                    resultP.innerHTML = `You won`;
                    resultP.style.backgroundColor = "green";
                    for (d of btns) {
                        d.disabled = true
                        d.style.opacity = "0.5";
                    }
                }
            })
        }


    }

    // Hint Function ***********

    hintImg.addEventListener("click", hint)

    function hint() {
        if (stillHidden.length == 0) {
            alert("You must try at least once")
        } else {
            this.disabled = true;
            this.style.opacity = "0.5";
            console.log(stillHidden);
            let randomLetter = stillHidden[Math.floor(Math.random() * stillHidden.length)]
            console.log(randomLetter);
            letters[randomLetter].style.display = "";
        }

    }
}

// let alaki = "messi";

// indexes = [];

// for (i = 0; i < alaki.length; i++) {
//     if (alaki[i] == "s") {
//         indexes.push(i)
//     }
// }
// console.log(indexes);