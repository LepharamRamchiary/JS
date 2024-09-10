// const number = [0,1,2,3,4]

// const num1 = number.push(9)
// const num1 = number.pop()

// const number2 = [ 7,8,9,10]
// number.unshift(9)
// number.shift()

// console.log(number.includes(1))
// console.log(number)
// const num1 = number.join()
// console.log(num1)
// console.log(num1)
// console.log(typeof num1)
// console.log(num1)


// const number = [0,1,2,3,4,5,6,7]

// console.log("A ", number);

// console.log(number.slice(1,3))

// console.log("B ", number);

// console.log(number.splice(1,3));

// console.log("c ", number);

// const number = [0,9,2,3,4,5,6,7]

// const isLarges = (e) => e>3

// console.log(number.findIndex(isLarges));


// const age = [20, 22, 24, 26]

// const even = (e) => e%2 === 0;
// const odd = (e) => e%2 !== 0;

// console.log(age.some(odd));

// const age = [20, 22, 24, 26]

// const isLarge = (e) => e > 22;

// console.log(age.filter(isLarge));
// console.log(age);


// const isLarge = (e) => e > 22

// console.log(age.find(isLarge));

const odd_num = [1, 3, 5, 7, 9]
const even_num = [2, 4, 6, 8]
// spret
const all_num = [...odd_num, ...even_num]

// console.log(all_num);

const another_array = [1, 2, 3, 4, [5, 6, 7], 8, [9, 10, 11, [12, 13, 14, [15, 15]]]]

const real_array = another_array.flat(Infinity) // or we given arr number also

// console.log(real_array);


console.log(Array.isArray("Lepharam"));
console.log(Array.from("Lepharam"));
console.log(Array.from({ name: "Lepharam" }));

const s1 = 10
const s2 = 20
const s3 = 30

console.log(Array.of(s1,s2,s3));
console.log(Array(7));
console.log(Array(s1,s2,s3));

