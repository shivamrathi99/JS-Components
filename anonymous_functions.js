In JS, functions can be written using the function keyword.
alerts are used to show something as an alert on the screen or we can simply console.log if we dont want
a pop up like--

function sayHello
{
    alert("hello");
    console.log("hello there");
}

functions are called/invoked using the () operator.
for eg. 
This example calls a function to convert from Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
console.log(toCelsius(77));
// output -- 25

//Without parentheses you're not actually calling the function. 
//A function name without the parentheses is a reference to the function.

Accessing a function without () will return the function definition instead of the function result;
so if we write 
console.log(toCelsius);
this will give us the function definition and not execute for the result 
// output --  function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
  }


This thing can be used to call a function inside an object




