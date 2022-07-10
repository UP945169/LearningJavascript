//document.getElementById("count-el").innerText = 5

//initalise for 0
//listen for clicks on button
//increment the count variable 
//change the count-el in HTML to reflect the new count

let countEl = document.getElementById("count-el")

let count = 0;

function increment() {
    console.log("Button was clicked"); 
    count = count + 1;
    countEl.innerText = count;
    console.log(count); 
    
}