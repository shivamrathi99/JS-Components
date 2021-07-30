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

//notice that function is called without using (), bcoz if we use (), the function will be called while
//running the script only, and not wait for the event to respond. So, we PASSED a function as an input
//so that it can be called at a later time.




this is a normal declaration, we can also use anonymous function to directly call a function instead of passing 
like

document.querySelector("h1").addEventListener("click", function()
{
    alert("hello");
    console.log("hello there");
});

//keypress detection 
keypress events can be detected by the "keydown" event. like we want to listen to the whole page keypress-

document.addEventListener("keydown", function ()
{
    console.log("hello");
})
//this will say hello on each keypress.

the anonymous function can take a parameter called event, which can detect about what keys are pressed- 
document.addEventListener("keydown", function (event)
{
    console.log(event);
})
//output -- KeyboardEvent {isTrusted: true, key: "w", code: "KeyW", location: 0, ctrlKey: false, …}
from output, you can use key property of the event object to target a particular key character 
like w,a,s,d etc by using event.key as parameter.

document.addEventListener("keydown", function (event)
{
    console.log(event);
})
//output -- w

