const users = [
    { firstName: "William", lastName: "Butcher", age: 26 },
    { firstName: "Hughie", lastName: "Campbell", age: 75 },
    { firstName: "John", lastName: "Homelander", age: 50 },
    { firstName: "Annie", lastName: "Starlight", age: 26 }
];

const output = users.filter((x) => x.age < 30)
    .map((x) => x.firstName);

console.log(output);