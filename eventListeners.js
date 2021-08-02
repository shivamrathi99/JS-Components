// ADDING EVENT LISTENER

Event listeners are used to handle some events in js like a click, press etc 
its can be used on something called target and produces a certain result using a function (normal/anonymous)

target.addEventListener("event",function);

target is what should the event listen to
event is like click, pressent, history, inpur etc
function is what is to be done when the event listenes to the target

like --

document.addEventListener("click",function()
{
    console.log("this event is being listened.")
})


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
    console.log(event.key);
})
//output -- w



