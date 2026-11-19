//Exercitiul 1

let colors=["red","green","blue","yellow","brown"];
console.log(colors);

//Exercitiul 2

let numbers=[10,20,30,40,50]
console.log(numbers[0],numbers[numbers.length-1]);

//Exercitiul 3

colors[2]="purple";
console.log(colors);

//Exercitiul 4

random_array=["red","green","blue","yellow","brown",10,20,30,40,50];
console.log(random_array.length);

//Exercitiul 5

colors.push("violet","grey");
console.log(colors);

//Exercitiul 6

console.log(numbers.pop());

//Exercitiul 7

numbers.unshift(16)
console.log(numbers);

//Exercitiul 8

colors.shift();
console.log(colors);

//Exercitiul 9

const names=["Paul","Razvan","Raluca","Denisa","Mihai"];
for(let i=0;i<names.length;i++){
    console.log(`Hello, ${names[i]}`);
}

//Exercitiul 10

let dailyTasks=["clean","work","cook","smoke"]

dailyTasks.forEach(dailyTask=>console.log(dailyTask));

//Exercitiul 11

let fruits=["grape","pear","pineapple","apple","strawberry"];

console.log(fruits.includes("apple"))

//Exercitiul 12

let randomNumbers=[21,43,213,45,324,100,433,324,678];
console.log(randomNumbers.indexOf(100));

//Exercitiul 13

let arrayJs=["JavaScript","is","fun"];
console.log(arrayJs.join(" "));

//Exercitiul 14

let colorStr="red,green,blue,yellow";
colorStr=colorStr.split(",")
console.log(colorStr);

//Exercitiul 15

const weekDays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

const weekend=weekDays.slice(5,7);
console.log(weekend);

//Exercitiul 16

let animals=["cat","dog","duck","rat"];
animals.splice(1,0,"Tiger");
animals.splice(2,1,"Lion");
console.log(animals);

//Exercitiul 17

numbers=[1,2,3,4];
multipliedBy10=numbers.map(number=> number*10);
console.log(multipliedBy10);

//Exercitiul 18

let ages=[12,18,25,10,30];
notUnderAge=ages.filter(age=>age>=18)
console.log(notUnderAge);

//Exercitiul 19

randomNumbers=[21,4,21,45,324,100,433,324,678];
console.log(randomNumbers.find(number=>number>50));

//Exercitiul 20

names.sort();
names.reverse();
console.log(names);


