let user = { name : "rohit", age : 25, city : "indore" };

let { ...temp } = user;

user.name = "amar";

console.log(user)
console.log(temp)


