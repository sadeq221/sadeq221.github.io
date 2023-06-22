window.onload = function () {
    // declarations
    let displayer = document.getElementById("displayer");
    let numbers = document.getElementsByClassName("number");
    let operators = document.getElementsByClassName("operator");
    let currentValue = 0;
    let equal = document.getElementById("equal");
    let cleaner = document.getElementById("cleaner");

    displayer.innerHTML = currentValue;

    for (let i of numbers) {

        i.addEventListener("click", function () {
            if (currentValue == "0") {
                currentValue = "";
            }
            currentValue += this.innerHTML
            displayer.innerHTML = currentValue;
        })
    }

    for (let i of operators) {
        i.addEventListener("click", function () {

            let lastChar = currentValue[currentValue.length - 1]

            if (lastChar == "+" || lastChar == "-" || lastChar == "*" ||
                lastChar == "/") {

                currentValue = currentValue.slice(0, currentValue.length - 1)
            }
            currentValue += this.value;
            displayer.innerHTML = currentValue
        })

    }

    equal.addEventListener("click", function () {
        currentValue = eval(currentValue);
        displayer.innerHTML = currentValue
        console.log(currentValue);
    })

    cleaner.addEventListener("click", function () {
        currentValue = 0;
        displayer.innerHTML = currentValue;
    })
}