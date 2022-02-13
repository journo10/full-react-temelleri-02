//ES6 MODULE

//ÖRNEK 1
export const hello = () => {
    console.log("Hello");
}

export const topla = (a, b) => {
    return a + b;
}

//ÖRNEK 2
const hello1 = () => {
    console.log("Hello");
}

const topla1 = (a, b) => {
    return a + b;
}
export { hello1, topla1 }
//index.js aktarımı aşağıdaki gibi olmalı unutma.
//import {hello,topla} "./My-Module";

//ÖRNEK 3
const hello2 = () => {
    console.log("Hello");
}
export default hello2;

export const topla2 = (a, b) => {
    return a + b;
}

export const çıkar = (a, b) => {
    return a - b;
}

//index.js aktarımı aşağıdaki gibi olmalı unutma.
//import hello2 , {topla2,çıkar} "./My-Module"; 
//NOT => default olarak dışarı aktaracaksan eğer import içinde süslü parantezin dışında yazmalısın..unutma.

//string olarak dışarı aktarma 
export const text = "Text";
//obje olarak dışarı aktarma 
export const user = {
    name: "Akif",
    surname: "aaaa"
};
//Array olarak dışarı aktarma 
export const users = [
    {
        name: "Akif",
        surname: "aaaa"
    },
    {
        name: "Ceyhun",
        surname: "bbbb"
    },
    {
        name: "Cihan",
        surname: "cccc"
    }
]

