// singleton 
// object declear with literals -> not give singleton
// ojecet declear with contarctor -> give singleton

//for constructor we create object like
// Object.create()

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Lepharam",
    "full name": "Lepharam Ramchairy",
    age: 16,
    login: false,
    [mySym]: "Key1formSymbole"
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

// JsUser.name = "Rekha"
// Object.freeze(JsUser)
// JsUser.name = "ahgj"
// console.log(JsUser);



JsUser.greeting = function () {
    console.log("Hello js")
}


JsUser.greeting2 = function () {
    console.log(`Hello js user, ${this.name}`)
}

// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());


// constructor

const tinderUser = new Object() // singleton
const tinderUser1 = {} //non singleton

tinderUser1.id ="1234"
tinderUser1.name =" Mainawu"
tinderUser1.isLoggin = false

// console.log(tinderUser1)

const registerUser = {
    email: "dipika@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Dipka",
            lastname: "Bty"
        }
    }
}


// console.log(registerUser.fullname);
// console.log(registerUser.fullname.userfullname.firstname);



// Objects Destructuring

const course = {
    name: "JS from MDN",
    price: 99.9,
}

const { name: couresName, price: coursePrice} = course

console.log(couresName);
console.log(coursePrice);

