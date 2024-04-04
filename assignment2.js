const prompt=require("prompt-sync")();
let p=[
    {name:"vina",Desc:"Hello, I am Vina",Ph_no:9867458235},
    {name:"veer",Desc:"Hello, I am Veer",Ph_no:8669815243},
    {name:"jenny",Desc:"Hello, I am jenny",Ph_no:9867459635}
]

manipulate();

function manipulate()
{
   for(let i of p)
   {
     console.log(i);
   }
}