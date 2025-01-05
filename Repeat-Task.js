//Repeating tasks.//
//Step one: Create a variable//
var x = "I ove JavaScript!";

//Step two: Printing it//
document.write(x);
document.write(x);
document.write(x);
document.write(x);
document.write(x);
document.write(x);
document.write(x);
document.write(x);
document.write(x);
document.write(x);

//Repeating a task using looping//
//For Loop//
var i;
for(i = 1; i<=10; i++){
    document.write("I love JavaScript!");
}


//Do...While loop//
var i = 1;
do{
    document.write("I love JavaScript!");
    i = i + 1;
} while (i<=10);