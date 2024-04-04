/*

# is used show Id.

DOM Manipulation:
Selecting with id-
document.getElementById("myId")

Selecting with class-
document.getElementsByClassName("myClass")

Selecting with tag-
document.getElementsByTagName("p")
*/
/*
let heading=document.getElementById("heading");
console.dir(heading);

let headings=document.getElementsByClassName("heading-class");
console.dir(headings);
*/
/*
let parah=document.getElementsByTagName("p");
console.dir(parah)
*/
/*
let ele=document.querySelector("p");
console.log(ele);

let elements=document.querySelectorAll("p");
console.log(elements);

let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+"from Apna College students";


Attributes:
getAttribute(attr)-to get the attribute val
setAttribute(attr,value)-to set the attribute val


let para=document.querySelector("p");
console.log(para.setAttribute("class","newClass"));

node.append(variablename)
node.prepend(variablename)
node.before(variablename)
node.after(variablename)


let newBtn=document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);

let p=document.querySelector("div");
p.after(newBtn);
*/
/*
let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi,I am new!</i>";

document.querySelector("body").prepend(newHeading);

let para=document.querySelector("p");
para.remove();
newHeading.remove();

appendChild()
removeChild()

Events:
Change in state of a object
Types :
Mouse events-click ,double click,etc
keyboard events- keypress,keyup,keydown
form events-submit
print event

onclick-->user clicks an HTML element
ondblclick-->user double clicks on HTML element
onmouseover-->for hovering effect of mouse
node.event = ( ) => {
    //handle here
}

Event object:
special object that has details about the event.
node.event = (e) => {
    //handle here }


btn1.onclick=(evt)=>
{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}

let div=document.querySelector("div")
div.onmouseover=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
};


Event Listeners

node.addEventListener(event,callback)
node.removeEventListener(event,callback)


let btn1=document.querySelector("#btn1");

btn1.addEventListener("click",()=>{
    console.log("Hello!!!!");
})


btn1.addEventListener("click",()=>{
    console.log("button1 was clicked - handler2");
})


assignment

let modeBtn=document.querySelector("#mode");
let currMode="light";

modeBtn.addEventListener("click",()=>{
    console.log("You are trying to change the mode");
    if(currMode==="light"){
      currMode="dark";
      document.querySelector("body").style.backgroundColor="black";
    }
    else
    {
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }

    console.log(currMode);
})



let DATA="secret information";

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("Data=",DATA);
    }
}

class Admin extends User{
 constructor(name,email){
    super(name,email);
 }

    editData(){
        DATA="some new Value"
    }
}

let student1=new User("shradha","abc@gmail.com");
let admin=new Admin("admin","admin@gmail.com");

try and catch:

let a=5;
let b=10;

console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);

try{
    console.log("a+b=",a+b);
}catch(err)
{
    console.log(err);
}


function Hello()
{
    console.log("Hello");
}

setTimeout(Hello,5000);

CallBack Hell: Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){ 
    sumCallback(a,b);
}

calculator(1,2,(a,b)=>{
    console.log(a+b);
     
});

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
          getNextData();
        }
    },2000);
}

getData(1,()=>{
    getData(2);
});


Promise is for eventual completion of task. It is an object in JS.
It is a solution to callback hell.

let promise=new Promise((resolve,reject)=>{...});-----function with two handlers.
promises has three states:
Pending 
Fulfilled 
rejected

let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    reject("some error occured");
});


function asyncFunc()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
        
    });
}

function asyncFunc2()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
        
    });
}

console.log("fetching data 1");
asyncFunc().then((res)=>{
    
    console.log("fetching data2");
asyncFunc2().then((res)=>{
        
    })
    
});



function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },5000)
    })
}

----------Promise Chain-----

getData(1).then((res)=>{
    console.log(res);
    getData(2).then((res)=>{
        console.log(res);
    });
});

Async-Await

function api(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("weather Data");
        resolve(200);
      },2000);
    });
}

async function getWeatherData(){
    await api();
}

*/

const URL="https://cat-fact.herokuapp.com";

const getFacts = async() =>{
    console.log("getting data....");
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();
    console.log(data[0]);
};