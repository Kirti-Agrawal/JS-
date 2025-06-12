// map filter reduce

const codingCourse = ["JS", "Java", "Py", "Cpp"];

// const val = codingCourse.forEach( (course)=> console.log(course));
// console.log(val); // Does not return anything

// Map 

const val = codingCourse.map( (item) => item.concat("Course"))
console.log(val); // Return 

//Filter

const shoppingCart = [
    {
        bookName : "The Secret",
        publish : 2007
    },
    {
        bookName : "The Socrates",
        publish : 1886
    },
    {
        bookName : "The Adidev",
        publish : 2025
    }

]

//Chaining and filter
shoppingCart.
filter( (item) => item.publish > 2000).
forEach( (item) => console.log(`Book name : ${item.bookName} relased in ${item.publish}`));


// Reduce - Total bill

const bill = [300,600,700,900];

const total = bill.reduce( (acc , currVal)=> acc+ currVal)
console.log(total);

