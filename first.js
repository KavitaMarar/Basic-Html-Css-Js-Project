/*

NaN->Not a Number 
For creating object and accesing 

Syntax:
const objectname={
    key:value,key;value
};

key accessing example:
const student={
    fullName:"Rahul Hathi",
    age: 20,
    cgpa: 8.6
};

student["fullName"];
object["key"];

values also can be changed by :
object["key"]=newvalue;

Arithmetic operators:
+,-,*,/,%
Asignment operators:
+=,-=,*=,/=

comparison operators:
==,!=,!==,===,<,>,<=,>=

logical operator:
&&,||,!

conditional statement:

if(cond)
{---statements---}

if(cond)
{---statements--}
else
{---statements--}

if(cond)
{---statements--}
else if(cond){
    ---statements--
}else{
    ---statements--
}

ternary operators:
cond?true o/p: false o/p 

There are two ways of giving messages:
alert("message")- it only prints the given message inside the parenthesis.
prompt("message")- it provides a input bar from user and it can also print the input.

conditional loops:
for()
Do-while()
while()

for-of loop---- used for applying loops on strings and arrays

for(let val of strVar)
{}
where val- variable strVar-String Variable

for-in loop----used for objects

for(let val in objectname){}

str.length

str[0]

template literals( `-back ticks)= a way to have embedded expressions in strings
let sent=`This is a template literals`

String Interpolation:Substitution of placeholders
`string text${expression} string text`

"String are immutable"===> immutable means which doesn't change

str.toUpperCase()
str.toLowerCase()
str.trim()
str.slice(start,end)
str1.concat(str2)
str.replace(searchVal,newVal)
str.charAt(idx)

loops->iterable(strings,objects,arrays)

Array Methods:
Push()
Pop()
toString()
Concat()
unshift()
shift()

-------
 shift() removes the first element from an array and returns it,
  while unshift() adds one or more elements to the beginning of an
 array and returns the new length.

slice(startIndex,endIndex)-Returns a piece of =====> last index non-inclusive -Not considered
array doesn't affect the original array
splice(startIndex,delcount,new)-Changes the original array by removing,replacing or adding

Functions :
function functionName(parameters)
{
    ----Statements---
}

Arrow functions:Compact way of writing a function
const functionName=(param1,param2..)=>{
    //code
}

Higher Order Function
arr.forEach(callBackFunction)
CallbackFunction: It is a function to execute for each element in the array

A callback is a function passed as an argument to another function.

3 optional params --> value,index,array
let arr=["pune","delhi","mumbai"];
arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx);
})

Map method:
creates a new array with the results of some operation. The value its callback returns are used to form new array
arr.map(callbackFnx(value,index,array))

let arr=[1,2,3,4,5]

let newa=arr.map((val)=>{
   return val%2!==0;
});


Filter method: a new array of elements that give true for a condition/filter
let arr=[1,2,3,4,5]

let newa=arr.filter((val)=>{
   return val%2!==0;
});

Reduce: performs some operations & reduces the array to single value.

let arr=[1,2,3,4,5]

const output=arr.reduce((res,curr)=>{
    return res+curr;
});

window object:
-open window in a browser
-global object 

console.dir()-special objects and documents are printed
document objects are printed
console.log(output);

Create:object array
name,release year,rating
1-5

2008<=



*/ 

//Assignment 1
/*function vowelString(str){
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        ch=str[i];
        if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u"||ch==="A"||ch==="E"||ch==="I"||ch==="O"||ch==="U")
        {
            count++
        }
    }
    return count;
    
}
*/

//Assignment 2

/*
let movie1=[
    {movieName:"Ironman",year:2013,rating:8.3},
    {movieName:"CaptainAmerica",year:2001,rating:7.9},
    {movieName:"Blackwidow",year:2009,rating:8.9},
    {movieName:"Thor",year:2008,rating:7.5},
    {movieName:"Dark knight",year:2006,rating:8.3}
   
]

console.log(movie1);
let newArr=[];


for(let i=0;i<movie1.length;i++)
{
if(movie1[i].year>=2008)
{
   newArr.push( movie1[i]);
}

}

console.log({newArr});
*/
/*

Assignment 3

const prompt=require("prompt-sync")();
let x=prompt("Enter the value of x:");
let y=prompt("Enter the value of y:");

quad(x,y);

function quad(x,y)
{
    if(x>0 && y>0 )
    {
        console.log("The value is from first quadrant");
    } 
    else if(x<0 && y>0)
    {
        console.log("The value is from second quadrant");
    }
    else if(x<0 && y<0)
    {
        console.log("The value is from third quadrant");
    }
    else
    {
        console.log("The value is from fourth quadrant");
    }

}
*/


/*
Assignment 4
let arr=[1,2,[3,4,7],8,[5,6,1],9]
let newArr=[]

for(let i=0;i<arr.length;i++)
{
    if (arr[i]>0)
    {
       newArr.push(arr[i]);
    }
    else
    {
        for(let x=0;x<arr[i].length;x++)
    {
        if(arr[i][x]>0)
        {
            newArr.push(arr[i][x]);
        }
        else
        {
            for(let a=0;a<arr[i][x].length;a++)
            {
                newArr.push(arr[i][x][a]);
            }
        }
        
    }
    }
    
}

console.log(newArr);
*/

/*

----Assignment no 5

str="India is my country";

    let words = str.split(' ');
    let newArr = [];

   for (let i = 0; i < words.length; i++)
    {
        if (words[i].length % 2 === 0)
       {
            newArr.push(words[i]);
        }
    }

console.log(newArr) ;
    
*/     