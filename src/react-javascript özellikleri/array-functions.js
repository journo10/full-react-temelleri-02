const users = [{
        name: "Akif",
        age: 11,
    },
    {
        name: "Akif",
        age: 28,
    },
    {
        name: "Sevilay",
        age: 40,
    },
];


// push
// users.push("Gizem");

//map
// users.map((item) => {
//     console.log(item.name);
// });

// find
const result = users.find((item) => item.name === "Akif" && item.age > 20);
console.log(result);

// filter
const filtered = users.filter(({
    name,
    age
}) => name === "Akif" && age < 20);
console.log(filtered);

// some
const some = users.some((item) => item.age === 9);
console.log(some);

// every
const every = users.every((item) => item.age > 20);
console.log(every);

// includes
const meyveler = ["elma", "armut", "muz"];
const isIncluded = meyveler.includes("portakal");

console.log(isIncluded);