In JS, functions can be written using the function keyword.
alerts are used to show something as an alert on the screen or we can simply console.log if we dont want
a pop up like--

function sayHello
{
    alert("hello");
    console.log("hello there");
}


// ADDING EVENT LISTENER

event listeners are used to handle some events in js like a click, press etc 
its can be used on something called target and produces a certain result using a function (normal/anonymous)

target.addEventListener("event",function);

target is what should the event listen to
event is like click, pressent, history, inpur etc
function is what is to be done when the event listenes to the target

like --

document.querySelector("h1").addEventListener("click", sayHello);

function sayHello
{
    alert("hello");
    console.log("hello there");
}

this is a normal declaration, we can also use anonymous function to directly call a function instead of passing 
like

document.querySelector("h1").addEventListener("click", function()
{
    alert("hello");
    console.log("hello there");
});







