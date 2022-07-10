//document.getElementById("count-el").innerText = 5

//initalise for 0
//listen for clicks on button
//increment the count variable 
//change the count-el in HTML to reflect the new count

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
 
let count = 0;

function increment() {
    console.log("Button was clicked"); 
    count += 1;
    countEl.innerText = count;
}

function save(){
    let countStr = count + " - "

    saveEl.innerText += countStr 
    console.log(count)
}