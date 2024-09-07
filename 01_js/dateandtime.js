// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate); // object


// let myCreatedDate = new Date(2024, 1, 23)
// let myCreatedDate = new Date(2024, 1, 23, 5 ,3)
// let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-13-2024")

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); mm second
// console.log( myCreatedDate.getTime()); mm second
// console.log(Math.round( Date.now()/1000)); second 

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMonth() + 1);

let datenew = newDate.toLocaleString("default", {
    weekday: "long"
})

console.log(datenew);
