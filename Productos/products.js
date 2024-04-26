function toggleColor(boton) {
    if (boton.style.color !== "red") {
        boton.style.color = "red";
    } else {
        boton.style.color = "";
    }
}

var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
var boton4 = document.getElementById("boton4");
var boton5 = document.getElementById("boton5");
var boton6 = document.getElementById("boton6");
var boton7 = document.getElementById("boton7");
var boton8 = document.getElementById("boton8");

boton1.addEventListener("click", function() {
    toggleColor(boton1);
});

boton2.addEventListener("click", function() {
    toggleColor(boton2);
});

boton3.addEventListener("click", function() {
    toggleColor(boton3);
});

boton4.addEventListener("click", function() {
    toggleColor(boton4);
});

boton5.addEventListener("click", function() {
    toggleColor(boton5);
});

boton6.addEventListener("click", function() {
    toggleColor(boton6);
});

boton7.addEventListener("click", function() {
    toggleColor(boton7);
});

boton8.addEventListener("click", function() {
    toggleColor(boton8);
});