let sandwichIcon = $("#sandwichIcon");
let sandwichMenu = $("#sandwichMenu");

sandwichMenu.hide();
sandwichIcon.css("rotate", "0")


sandwichIcon.click(function () {
    if (sandwichMenu.css("display") == "none") {
        sandwichMenu.slideDown(700);
        sandwichIcon.animate({ "rotate": "-90deg" }, 700)
    } else {
        sandwichMenu.slideUp(700);
        sandwichIcon.animate({ "rotate": "0deg" }, 700)

    }

})