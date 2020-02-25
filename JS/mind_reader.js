//initial variables

let title = document.getElementById("title");
let text = document.getElementById("text");
let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
let state = 0;
    var char = ["!","@","#","$","%","^","&","*","~","?","`","+"];
    var str = ""
    var random = ""
    var random9 = char[Math.floor(Math.random()*char.length)]

//button actions and displays

button1.innerHTML = "Previous";
button2.innerHTML = "Next";
button3.innerHTML = "Try Again";

//defining functions to call upon later
function randomize(){
    for(let i=1;i<=99;i++){
        if(i % 9 !== 0){
            random = char[Math.floor(Math.random()*char.length)]
            str += i + ` : ${random} <br> `;
        }else{
            str += i + ` : ${random9} <br> `;
        }
     }
     title.innerHTML = "<h3>Find your new number below!</h3><p><h3>: Note the symbol next to your new number</h3></p>";
     text.innerHTML =`<h3> ${str} <h3>`;
}

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
    button1.style.display="none";
    button3.style.display="none";
    button2.style.display="inline-block"
    title.innerHTML = "Am i a Psychic!?";
    text.innerHTML = "<h3>If you want to find out click next!</h3>";

    // change();
 }


//assigning button to functions

button1.onclick = previous;
button2.onclick = next;
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
        // button1.style.display="none";
        // button3.style.display="none";
        // button2.style.display="inline-block"
        init();
    }

    else if (state == 1) {
        title.innerHTML = "Pick a number in your head between 1-99!";
        text.innerHTML = "<h3>When you have your number click next!</h3>";
        

    }
    else if (state == 2) {
        title.innerHTML = "Take your number and add the digits together to get a new number!";
        text.innerHTML = "<h3>ex: 16; 1 + 6 = 7</h3> <p>Click next to continue</p>";


    }
    else if (state == 3) {
        title.innerHTML = "Subtract your new number from the original number!";
        text.innerHTML = "<h3>ex: 16 - 7 = 9</h3> <p>Click next to continue</p>";


    }
    else if (state == 4) {
        randomize();
        // title.innerHTML = "<h3>Find your new number below</h3><p><h3>Note the symbol next to your number</h3></p>";
        // text.innerHTML =`<h3> ${str} <h3>`;
        
    }

    else if (state = 5) {

        title.innerHTML = `<br><h1>Your Symbol is: ${random9}<h1>`;
        text.innerHTML = "<h4>See, i'm a Wizard.<br><br> Still apprehensive?<br><br>Click, Try Again!<h4>";
        button3.style.display="inline-block"
        button2.style.display="none"

        

    }
}


//calling the initial change function

change();










