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
    [mySym] : "Key1formSymbole"
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

// JsUser.name = "Rekha"
// Object.freeze(JsUser)
// JsUser.name = "ahgj"
// console.log(JsUser);



JsUser.greeting = function() {
    console.log("Hello js")
}


JsUser.greeting2 = function() {
    console.log(`Hello js user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());


