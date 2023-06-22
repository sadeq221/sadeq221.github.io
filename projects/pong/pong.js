// Declarations
let letHimChoose = $("#letHimChoose");
let chBtns = $(".chooseBtn");
let container = $("#container");
let ball = $("#ball");
let leftPaddle = $("#leftPaddle");
let rightPaddle = $("#rightPaddle");
let userMark = 0;
let systemMark = 0;
let stopBtn = $("#stopBtn");

// Styling

rightPaddle.css("top", "200px");
leftPaddle.css("top", "107px");

// Lets Gooooo !!!


chBtns.each(function () {
    $(this).on("click", function () {

        // Declares

        // let containerRect = container.get(0).getBoundingClientRect();
        // console.log(containerRect);
        let friendly = false;
        let functionsArr = [upLeft, downLeft, upRight, downRight];
        // -------

        letHimChoose.hide();

        if (this.innerHTML == "Friendly") {
            friendly = true;
        }

        setTimeout(functionsArr[Math.floor(Math.random() * 4)], 500)


        // Up  Right

        function upRight() {

            let containerRect = container.get(0).getBoundingClientRect();
            let rightPaddleRect = rightPaddle.get(0).getBoundingClientRect();
            let ballRect = ball.get(0).getBoundingClientRect();
            let bY = Math.floor(Math.random() * 3) + 5;
            let bX = Math.floor(Math.random() * 3) + 6;

            // hit ceil

            if (ballRect.top <= 0) {
                clearTimeout(uR);
                downRight();
            }

            // hit front
            else if (ballRect.right >= rightPaddleRect.left && ballRect.top <= rightPaddleRect.bottom && ballRect.bottom >= rightPaddleRect.top) {
                clearTimeout(uR);
                upLeft();
            }

            // hit bottom win
            else if (ballRect.right <= rightPaddleRect.right && ballRect.right >= rightPaddleRect.left && ballRect.top == rightPaddleRect.bottom) {
                clearTimeout(uR);
                downLeft();
            }

            // hit bottom lose
            else if (ballRect.right > rightPaddleRect.right && ballRect.top == rightPaddleRect.bottom) {
                clearTimeout(uR);
                downRight();
            } else if (ballRect.right >= containerRect.right) {
                clearTimeout(uR);

                $("#userMark").text(userMark += 1);

                ball.css({
                    "top": `${Math.floor(Math.random() * 650)}px`,
                    "left": `${containerRect.width / 2 - 19}px`
                })
                setTimeout(functionsArr[Math.floor(Math.random() * 2) + 2], 1000)
            }

            // Ball is on the way
            else {
                // move ball 

                ball.css({
                    "display": "",
                    "top": `-=${bY}px`,
                    "left": `+=${bX}px`,
                });

                // Moving system paddle

                function moveSystemPaddle() {
                    if (!friendly) {
                        let p = Math.floor(Math.random() * 3 + 2);
                        if (rightPaddle.css("top") >= "0px" && ballRect.right > 450) {
                            rightPaddle.css("top", `-=${p}px`)
                        }
                    }
                }
                moveSystemPaddle()

                var uR = setTimeout(upRight, 1);
            }
        }

        //  Down  Right


        function downRight() {

            let containerRect = container.get(0).getBoundingClientRect();
            let rightPaddleRect = rightPaddle.get(0).getBoundingClientRect();
            let ballRect = ball.get(0).getBoundingClientRect();
            let bY = Math.floor(Math.random() * 3) + 5;
            let bX = Math.floor(Math.random() * 3) + 6;

            if (ballRect.right >= containerRect.right) {

                clearTimeout(dR);

                $("#userMark").text(userMark += 1);

                ball.css({
                    "top": `${Math.floor(Math.random() * 650)}px`,
                    "left": `${containerRect.width / 2 - 19}px`
                })

                setTimeout(functionsArr[Math.floor(Math.random() * 2) + 2], 1000)

            } else if (ballRect.right >= rightPaddleRect.left && ballRect.bottom >=
                rightPaddleRect.top && ballRect.top <= rightPaddleRect.bottom) {
                clearTimeout(dR);
                downLeft();
            }

            // hit top win
            else if (ballRect.right <= rightPaddleRect.right && ballRect.right >= rightPaddleRect.left && ballRect.bottom == rightPaddleRect.top) {
                clearTimeout(dR);
                upLeft();
            }

            // hit top lose
            else if (ballRect.right > rightPaddleRect.right && ballRect.bottom == rightPaddleRect.top) {
                clearTimeout(dR);
                upRight();
            }

            // hit ground
            else if (ballRect.bottom >= containerRect.bottom) {

                clearTimeout(dR);

                upRight();

            } else {
                // move ball 

                ball.css({
                    "display": "",
                    "top": `+=${bY}px`,
                    "left": `+=${bX}px`,
                });

                // Moving system paddle

                function moveSystemPaddle() {
                    if (!friendly) {
                        let p = Math.floor(Math.random() * 3 + 2);
                        if (rightPaddle.css("bottom") >= "0px" && ballRect.right > 450) {
                            rightPaddle.css("top", `+=${p}px`)
                        }
                    }
                }
                moveSystemPaddle()

                var dR = setTimeout(downRight, 1);
            }
        }

        // Down  Left

        function downLeft() {

            let containerRect = container.get(0).getBoundingClientRect();
            let leftPaddleRect = leftPaddle.get(0).getBoundingClientRect();
            let ballRect = ball.get(0).getBoundingClientRect();
            let bY = Math.floor(Math.random() * 3) + 5;
            let bX = Math.floor(Math.random() * 3) + 6;

            // hit ground
            if (ballRect.bottom >= containerRect.bottom) {
                clearTimeout(dL);
                upLeft();
            } else if (ballRect.left <= containerRect.left) {
                clearTimeout(dL);

                $("#systemMark").text(systemMark += 1);


                ball.css({
                    "top": `${Math.floor(Math.random() * 650)}px`,
                    "left": `${containerRect.width / 2 - 19}px`
                })

                // 1 of 2 left functions is excuted randomly
                setTimeout(functionsArr[Math.floor(Math.random() * 2)], 1000)

            }

            // hit front
            else if (ballRect.left <= leftPaddleRect.right && ballRect.bottom >= leftPaddleRect.top && ballRect.top <= leftPaddleRect.bottom) {
                clearTimeout(dL);
                downRight();
            }

            // hit top win
            else if (ballRect.left >= leftPaddleRect.left && ballRect.left <= leftPaddleRect.right && ballRect.bottom == leftPaddleRect.top) {
                clearTimeout(dL);
                upRight();
            }

            // hit top lose
            else if (ballRect.left < leftPaddleRect.left && ballRect.bottom == leftPaddleRect.top) {
                clearTimeout(dL);
                upLeft();
            } else {

                // moving ball

                ball.css({
                    "display": "",
                    "top": `+=${bY}px`,
                    "left": `-=${bX}px`,
                });

                var dL = setTimeout(downLeft, 1);
            }
        }

        // Up  Left

        function upLeft() {

            let containerRect = container.get(0).getBoundingClientRect();
            let leftPaddleRect = leftPaddle.get(0).getBoundingClientRect();
            let ballRect = ball.get(0).getBoundingClientRect();
            let bY = Math.floor(Math.random() * 3) + 5;
            let bX = Math.floor(Math.random() * 3) + 6;

            if (ballRect.top <= 0) {
                clearTimeout(uL);
                downLeft();
            } else if (ballRect.left <= containerRect.left) {
                clearTimeout(uL);

                $("#systemMark").text(systemMark += 1);

                ball.css({
                    "top": `${Math.floor(Math.random() * 650)}px`,
                    "left": `${containerRect.width / 2 - 19}px`
                })

                setTimeout(functionsArr[Math.floor(Math.random() * 2)], 1000)

            }
            // hit front
            else if (ballRect.left <= leftPaddleRect.right && ballRect.top <= leftPaddleRect.bottom && ballRect.bottom >= leftPaddleRect.top) {
                clearTimeout(uL);
                upRight();
            }

            // hit bottom win
            else if (ballRect.left >= leftPaddleRect.left && ballRect.left <= leftPaddleRect.right && ballRect.top == leftPaddleRect.bottom) {
                clearTimeout(uL);
                downRight();
            }

            // hit bottom lose
            else if (ballRect.left < leftPaddleRect.left && ballRect.top == leftPaddleRect.bottom) {
                clearTimeout(uL);
                downLeft();
            }

            // move Ball
            else {
                ball.css({
                    "display": "",
                    "top": `-=${bY}px`,
                    "left": `-=${bX}px`,
                });

                var uL = setTimeout(upLeft, 1);
            }
        }
        //  Moving left user paddle

        function moveUserPaddle() {

            // Declarations

            let containerRect = container.get(0).getBoundingClientRect();
            let leftPaddleRect = leftPaddle.get(0).getBoundingClientRect();

            // with keyboard

            let upPressed = false;
            let downPressed = false;

            $(window).keydown(function (k) {
                if (k.key == "ArrowUp") {
                    upPressed = true;
                } else if (k.key == "ArrowDown") {
                    downPressed = true;
                }
            })
            $(window).keyup(function (k) {
                if (k.key == "ArrowUp" || k.key == "ArrowDown") {
                    upPressed = false;
                    downPressed = false;
                }
            })

            setInterval(() => {
                if (upPressed == true && rightPaddle.css("top") >= "0px") {
                    rightPaddle.css("top", "-=7px");
                }
                if (downPressed == true && rightPaddle.css("bottom") >= "0px") {
                    rightPaddle.css("top", "+=7px");
                }
            }, 1)

            // with mouse

        }
        moveUserPaddle()

        //  Moving Right user paddle (in friendly mode)


        function moveFriendPaddle() {

            let wPressed = false;
            let sPressed = false;

            $(window).keydown(function (k) {
                if (k.key == "w") {
                    wPressed = true;
                } else if (k.key == "s") {
                    sPressed = true;
                }
            })
            $(window).keyup(function (k) {
                if (k.key == "w" || k.key == "s") {
                    wPressed = false;
                    sPressed = false;
                }
            })

            setInterval(() => {
                if (wPressed == true && leftPaddle.css("top") >= "0px") {
                    leftPaddle.css("top", "-=7px");
                }
                if (sPressed == true && leftPaddle.css("bottom") >= "0px") {
                    leftPaddle.css("top", "+=7px");
                }
            }, 1)
        }
        moveFriendPaddle()
    })
})