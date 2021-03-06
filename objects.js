An object is a collection of properties, and a property is an association between a name (or key) 
and a value. A property's value can be a function, in which case the property is known as a method. 
In addition to objects that are predefined in the browser, you can define your own objects.

//variables in a method are called properties and functions are called methods, both are accessed using (.)


suppose we are making a house and we need workers, so we can create workers like raj as - 

var worker1name = "Raj";
var worker1age = 29;
var worker1experience = 12;
var worker1skills = ["cementing", "plumbing", "lifting"];

similary for worker 2 and worker 3 and so on, a more efficient way is to create an object and group all 
these properties together, like  


var worker1 = {
name : "Raj",
age : 29,
experience : 12,
skills : ["cementing", "plumbing", "lifting"]
}

And to call worker1 by name we can then use- 
worker1.name; 
this is called a property of worker object
or we can say properties in objects are nothing but variable assigned to another variable.

similarly, we can make a function as to call it by using (most efficient) - 


function Worker (name,age,experience,skills)
{
    this.name = name;  //this keyword is used to denote the working self or owner
    this.age = age;
    this.experience = experience;
    this.skills = skills;
}

the above function is known as a constructor function, function name has to be capitalized for 
such a function;
then we can make objects using this constructor function like-- 

var bellboy1 = new Bellboy("Raj", 19 , 21 , ["cementing", "plumbing", "lifting"] );  //object 1 

var bellboy2 = new Bellboy("Kunal", 22 , 41 , ["cementing", "playing"] );  //object 2 


so this is how objects can be used to make code shorter and more efficient.

methods can be put through in an object like--
if we have a function moveBag;

function moveBag
{
    alert("may i take your bag?");
    pickUpSuitcase();
    move();
}

if we want to include this function in our worker1 object then we can do this by passing function name as 
variable and function definition as an anonymous function

So, that would be -- 

var worker1 = {
    name : "Raj",
    age : 29,
    experience : 12,
    skills : ["cementing", "plumbing", "lifting"];
    moveBag = function () {
        alert("may i take your bag?");
        pickUpSuitcase();
        move();
}
    }
    }

    we can call this as -- 
    // worker1.moveBag

    similarly, with the function too 

    function Worker (name,age,experience,skills)
{
    this.name = name;  //this keyword is used to denote the working self or owner
    this.age = age;
    this.experience = experience;
    this.skills = skills;
    this.moveBag = function () {
        alert("may i take your bag?");
        pickUpSuitcase();
        move();
    }
}   

// then we can create objects using this function and all objects will have this function of moveBag.

 

