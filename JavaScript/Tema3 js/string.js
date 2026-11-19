//Exercitiul 1

function stringLength(str){
    return str.length
}

console.log(stringLength("asdfghjk"));

//Exercitiul 2
function fullName(first,last){
    return `${first} ${last}`;
}
console.log(fullName("Paul","Rotariu"));

//Exercitiul 3

function shout(a)
{
    return a.toUpperCase();
}

console.log(shout("aasdfghj"));

//Exercitiul 4

function whisper(a){
    return a.toLowerCase();
}

console.log(whisper("aASDdsS"));

//Exercitiul 5

function firstCharacter(a){
    return a[0];
}

console.log(firstCharacter("asdfghj"));

//Exercitiul 6

function lastCh(str){
    return str[str.length-1];
}

console.log(lastCh('qwerty'))

//Exercitiul 7
function first3(str){
    return str.substring(0,3);
}
console.log(first3("qwerty"));

//Exercitiul 8

function middle(str){
    return str.slice(3,str.length-3);
}
console.log(middle("123456789101112"));

//Exercitiul 9
function strToArr(str){
    return str.split(" ");
}
console.log(strToArr("Better think twice"));

//Exercitiul 10
function initials(str){
let fullName=str.split(/[\s-]+/)
let initials="";
fullName.forEach(name=>initials+=name[0].toUpperCase()+".")
return initials;
}
console.log(initials("Rotariu Paul Andrei-Vlad"));
//Exercitiul 11
function includesJS(str){
    return str.includes("JavaScript");
}

console.log(includesJS("JavaScript is fun"));
//Exercitiul 12
function StartsWithHello(str){
    str = str.split(/[\s-]+/);
    return str[0]=="Hello"
}
console.log(StartsWithHello("JavaScript is fun"));
console.log(StartsWithHello("Hello World!"));
//Exercitiul 13
function endsWithQuestionMark(str){
    return str.endsWith("?")
}
console.log(endsWithQuestionMark("Is JavaScript fun?"));
//Exercitiul 14
function find_a(str){
    return str.indexOf("a");
}
console.log(find_a("que ya no estare aqui"))
//Exercitiul 15
function vowels(str){
    let vowels="aeiou";
    let cnt=0;
    str.toLowerCase().split("").forEach(letter=>{cnt+=vowels.includes(letter) ? 1:0})
    return cnt;
}
console.log(vowels("Is JavaScript fun?"));
//Exercitiul 16
function BadToGood(str){
    return str.replace("bad","good");
}
console.log(BadToGood("It s good to be bad"));
//Exercitiul 17
function noSpace(str){
    return str.replaceAll(" ","-");
}
console.log(noSpace("It s good to be bad"));
//Exercitiul 18
function noEXTRAspaces(str){
    return str.trim();
}
console.log(noEXTRAspaces("        qwerty       "));
//Exercitiul 19
function fullReverse(str){
    return str.split("").reverse().join("");
}
console.log(fullReverse("Is JavaScript fun or is it not?"));
//Exercitiul 20
function Capitalize(str){
    return str[0].toUpperCase()+str.slice(1);
}
console.log(Capitalize("apple"));