var message = ["click me", "you missed me", "try again", "haha"];

function moveButton() {
    var button = document.getElementById("1");
    if (button.value == null) {
        button.value = 0;
    } else {

        if (button.value == 14) {
            button.remove();
            var header = document.getElementsByClassName("__buttonContainer");
            console.log(header);
            var text = document.createElement("h2");
            text.innerHTML = "I LOVE YOU " + button.name + " YIEEEEE <3";
            text.style.textAlign = "center";
            text.style.marginTop = "30%";
            text.style.fontSize = "3rem";
            text.style.color = "rgb(134, 134, 134)";
            header[0].appendChild(text);
            play()
        };

        if (button.value == 13) {
            button.innerHTML = "This is the last one";
            button.value++;
        } else {
            button.innerHTML = message[Math.floor(Math.random() * 3)];
            button.value++;
        }
    }
    button.style.top = Math.floor(Math.random() * 50) + "%";
    button.style.left = Math.floor(Math.random() * 50) + "%";
    button.addEventListener("click", moveButton);
}

function start() {
    var submit = document.getElementById("valentines");
    var button = document.createElement("button");
    if (document.forms["valentines"]["name"].value != "") {
        var name = document.forms["valentines"]["name"].value;
        button.id = "1";
        button.name = name;
        button.innerHTML = "Tap me";
        button.style.position = "absolute";
        button.style.top = "10%";
        button.style.left = "10%";
        var container = document.getElementsByClassName("__buttonContainer");
        container[0].appendChild(button);
        button.addEventListener("click", moveButton);
        submit.remove();
    }

}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}