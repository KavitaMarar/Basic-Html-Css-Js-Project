// const prompt=require("prompt-sync")();
// let library = [
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//     { title: "1984", author: "George Orwell", year: 1949 }
// ];

// function newLib(){
//     let newBook={}
//     let bookName=prompt("Enter the name of the Book:");
//     newBook.title=bookName;
//     let bookAuthorName=prompt("Enter the Author Name:");
//     newBook.author=bookAuthorName;
//     let bookYear=prompt("Enter the year:");
//     newBook.year=bookYear;
//     library.push(newBook);    
// }
// //newLib();


// const bookYear=prompt("Enter the year to find the book before it:");
// const findBook=library.map((book)=>
// {
//     if(book.year<bookYear)
//     {
//         return book.title;
//     }
//      return;
// }).filter(x=>x!==undefined)  ;
// console.log(findBook);




// //console.log("\nBooks before 1950:");
// let Book19=library.filter((book)=>{
//     return book.year<1950;
// })
// //console.log(Book19);


// //console.log("\nThe List of Books Available:",library);

