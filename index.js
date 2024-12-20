var drums = document.querySelectorAll("button").length;
for (var i = 0; i < drums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        makePress(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    makePress(event.key);
});

function makeSound(key) {
    switch (key) {
        case "a":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;

        case "f":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;

        case "k":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var bash = new Audio("crash.mp3");
            bash.play();
            break;

        default:
            console.log("invalid input");
    }
}

function makePress(currentkey){
    var active = document.querySelector("."+ currentkey);
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed");
    }, 300);

}
