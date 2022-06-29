// let count = 0;
// let firstTriangle = "#"
// for (count = 0; count <= 6; count++, firstTriangle += "#") {
//     console.log(firstTriangle);
// }

//FIZZBUZZ
/*
for (let index = 1; index <= 100; index++) {
    if ((index % 5) == 0 && (index % 3) ==0){
        console.log("FizzBuzz")
    }
    else if ((index % 3) == 0){
        console.log("Fizz");
    }
    else if ((index % 5) == 0 && !(index % 3 == 0)){
        console.log("Buzz");
    }
    else{
        console.log(index);
    }
}

*/
//chess
var size = 8; //this is the variable setting

var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
  for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
