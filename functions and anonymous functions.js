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


This thing can be used to call a function inside an object, like for event listeners;

as, 

document.querySelector("h1").addEventListener("click", sayHello);

function sayHello
{
    alert("hello");
    console.log("hello there");
}

//notice that function is called without using (), bcoz if we use (), the function will be called while
//running the script only, and not wait for the event to respond. So, we PASSED a function as an input
//so that it can be called at a later time.


this is a normal declaration, we can also use anonymous function (function without a name)
to directly call a function instead of passing like-- 

document.querySelector("h1").addEventListener("click", function()
{
    alert("hello");
    console.log("hello there");
});


anonymous functions can also take an parameter to pass, like someone has happened

document.querySelector("h1").addEventListener("click", function(event)
{   
  console.log(event);  
});

//this will pass the event in the function to make use of it

or we can create a function to pass it to, like --

function Detect(key)
{
  console.log(key + "has been pressed");
}

and 

document.querySelector("h1").addEventListener("click", function(event)
{   
  Detect(event); 
});
