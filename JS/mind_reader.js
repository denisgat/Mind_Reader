//initial variables

let title = document.getElementById("title");
let text = document.getElementById("text");
let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
let state = 0;

//button actions and displays

button1.innerHTML = "Next";
button2.innerHTML = "Previous";
button3.innerHTML = "Try Again";

//defining functions to call upon later

function next() {
    state = state + 1;
    change();
}

function previous() {
    state = state - 1;
    change();
}

function init() {
    state = 0;
    title.innerHTML = "This is page 1";
    text.innerHTML = "this is the text";
    change();
    
}

//assigning button to functions

button1.onclick = next;
button2.onclick = previous;
button3.onclick = init;

//assigining inital display values for buttons

button1.style.display="inline-block"
button2.style.display="inline-block"
button3.style.display="none"


//changing pages by changing states in if statements

function change() {

    //reasigning  button display values whenever change function is called

    button1.style.display="inline-block"
    button2.style.display="inline-block"
    button3.style.display="none"

    if (state == 0) {
        document.getElementById("btn2").style.display="none";
        init();
    }

    else if (state == 1) {
        title.innerHTML = "This is page 2";
        text.innerHTML = "this is the text";
        

    }
    else if (state == 2) {
        title.innerHTML = "This is page 3";
        text.innerHTML = "this is the text";


    }
    else if (state == 3) {
        title.innerHTML = "This is page 4";
        text.innerHTML = "this is the text";


    }
    else if (state == 4) {
        title.innerHTML = "This is page 5";
        text.innerHTML = "this is the text";


    }
    else if (state = 5) {
        title.innerHTML = "This is page 6";
        text.innerHTML = "this is the text";
        document.getElementById("btn3").style.display="inline-block"
        document.getElementById("btn1").style.display="none"

    }
}


//calling the initial change function

change();










