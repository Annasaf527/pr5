"use strict";

// задание 1

let salaries = {
    John: 100,  
    Ann: 160,
    Pete: 130
};
  
let sum = Object.values(salaries).reduce((acc, current) => acc + current, 0);
  
console.log(sum);

// задание 2

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        obj[key] *= 2;
      }
    }
}
  
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);
  
console.log(menu);

// задание 3 

let calculator = {
    a: 0,
    b: 0,
    
    read() {
      this.a = +prompt("Введите первое значение:", 0);
      this.b = +prompt("Введите второе значение:", 0);
    },
    
    sum() {
      return this.a + this.b;
    },
    
    mul() {
      return this.a * this.b;
    }
};
  

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// задание 4

function extractCurrencyValue(str) {
    return parseFloat(str.replace(/\$/,"")); 
}
  
let value = extractCurrencyValue("$120");
console.log(value); 

// задание 5 

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name); 

alert(names);

// задание 6

function getAverageAge(users) {
    if (users.length === 0) return 0;

    let totalAge = users.reduce((sum, user) => sum + user.age, 0);

    return totalAge / users.length;
}

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let users1 = [vasya, petya, masha];

alert(getAverageAge(users));