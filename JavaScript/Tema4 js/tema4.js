//Exercitiul 1
console.log("Ex1")
function WordFrCounter(str){
    str=str.replaceAll(".","").replaceAll(",","").replaceAll(";","");
    str = str.split(" ");
    let fr={}
    str.forEach(word=>{
        if (fr[word]==undefined){
            fr[word]=1;
        }else
            fr[word]++
    });

    return fr;
}

console.log(WordFrCounter("aa b ccc ds, ds ccc;"));
//Exercitiul 2
console.log("Ex2")

function shoppingCart(products,discount){
    let total=0;
    products.forEach(product=>{total+=product.price*product.quantity;});
    if(total>100){
        total=total-discount/100*total;
    }
    return Number(total.toFixed(2));
}

const products=[
    {name:"Bread",price:5,quantity:50},
    {name:"Water",price:4,quantity:60},
    {name:"Honey",price:6,quantity:23}
]

console.log(shoppingCart(products,13));


//Exercitiul 3
console.log("Ex3")

function TitleCaseAndSort(str){
    str=str.split(",");
    names=str.map(word=>{
        word=word.trim();
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    const result={};
    result["names"]=names.sort();
    return result;
}
console.log(TitleCaseAndSort("paUl   ,   VeRonica,iustina,  Andrei    , Cristinel"));


//Exercitiul 4
console.log("Ex4")

function extractAndAverage(values){
    const filtered=values.filter(value=> {

        return typeof value==="number" || (typeof value==="string" && value.trim()!=="" && !isNaN(value));

    })
    const numbers=filtered.map(value=>Number(value));
    const sum=numbers.reduce((s,value) => s+value,0);
    return numbers.length>0? sum/numbers.length:0;

}

const values=[21,32,"3.14",true,false,"da","42"];

console.log(extractAndAverage(values));

//Exercitiul 5
console.log("Ex5")

function groupByProperty(arr){
    const grouped={}
    arr.forEach(user=>{
        if(!grouped[user.role]){
            grouped[user.role]=[];
        }
        grouped[user.role].push(user.name);
    });
    return grouped;
}

const users=[
    {id:0,name:"Paul",role:"student"},
    {id:1,name:"Georgiana",role:"student"},
    {id:2,name:"Teodor",role:"teacher"},
    {id:3,name:"Rotariu",role:"admin"}
];

console.log(groupByProperty(users));

//Exercitiul 6
console.log("Ex6")

function longestWordStats(str){
    stats={}
    str=str.replace(/[^\w\s]/g, "").split(" ");
    str.sort((a,b)=>b.length-a.length);
    stats.word=str[0];
    stats.length=str[0].length;
    stats.vowelCount=str[0].toLowerCase().split("").filter(letter=>"aeiou".includes(letter)).length;

    return stats;


}

let sentence="Small, consistent steps every day add up to big changes over time."

console.log(longestWordStats(sentence));

//Exercitiul 7
console.log("Ex7")

function filterByStrLengthAndSum(arr,N){
    const filtered=arr.filter(word=>word.length>=N);
    const lenghts=filtered.map(word=>word.length);
    return Number(lenghts.reduce((a,b)=> a+b,0));
}

const arrayOfStrings=["the","quick","brown","fox","jumps","over","lazy","dog"];

console.log(filterByStrLengthAndSum(arrayOfStrings,4));
//Exercitiul 8
console.log("Ex8")

function gradeBookHighestScore(obj){
    highestScore={};
    Object.entries(obj).forEach(([subject,scores])=>{
        const highest=scores.reduce((a,b)=>a>b?a:b);
        highestScore[subject]=highest;
    })
    return highestScore;
}

const gradeBook={math:[8,7,9,6,8],geography:[10,9,8,10],history:[10,10,10,10],french:[6,7,8,9,8,7,6],};

console.log(gradeBookHighestScore(gradeBook));

//Exercitiul 9
console.log("Ex9")

function relationalMerge(emp,dept){
    return emp.map(employee=>{
        const department=dept.find(dept=>dept.empId===employee.empId);
        return {
            empId:employee.empId,
            name:employee.name,
            department:department.deptName
        };
    });
}

const employees=[{empId:0,name:"Paul"},{empId:1,name:"Mihai"},{empId:3,name:"Florin"}];

const departments=[{empId:0,deptName:"HR"},{empId:1,deptName:"Finance"},{empId:3,deptName: "IT"}];

console.log(relationalMerge(employees,departments));

//Exercitiul 10
console.log("Ex10")

function PathValueExtractor(obj,path){
    const keys=path.split(".");
    let current=obj;
    for(const key of keys){
        current=current[key];
    }
    return current
}
const obj = {
    user: {
        profile: {
            address: {
                city: "Botosani"
            }
        }
    }
};
const path="user.profile.address.city";
console.log(PathValueExtractor(obj,path));

//Exercitiul 11
console.log("Ex11")

function dateReformatting(dates)
{
    const newDates=dates.map(date=>{
        const numbers=date.split("-");
        return numbers[2]+"/"+numbers[1]+"/"+numbers[0];
    })
    return newDates.join(",");
}

const dates = ["2005-08-16","2023-07-15","2026-11-26"];
console.log(dateReformatting(dates));
//Exercitiul 12
console.log("Ex12")

function primeNumbers(min,max){
    const numbers=Array.from({length:max-min+1},(_,index)=>min+index);

    const prime=numbers.filter(number=>{
        if(number<2) return false;
        for(let i=2;i<number;i++)
        {
            if (number%i==0) return false;
        }
        return true;
    })

    return prime;

}

console.log(primeNumbers(0,100));

//Exercitiul 13
console.log("Ex13")

function inventoryFlattening(stores){
    const items=stores.flatMap(store=>store.inventory);
    const filtered=items.filter(item=>item.price>=10);
    const sorted=filtered.sort((a,b)=>b.price-a.price);
    return sorted;
}

const stores = [
    {
        storeName: "Store A",
        inventory: [
            { name: "Laptop", price: 1000 },
            { name: "Mouse", price: 5 }
        ]
    },
    {
        storeName: "Store B",
        inventory: [
            { name: "Keyboard", price: 50 },
            { name: "Cable", price: 8 }
        ]
    }
];

console.log(inventoryFlattening(stores));

//Exercitiul 14
console.log("Ex14")

function propertyValueCollector(cars){
    const result = {make:[],model:[],color:[]};
    const keys=Object.keys(result);
    cars.forEach(car=>{
        keys.forEach((key)=>{
            if(!result[key].includes(car[key])){
                result[key].push(car[key]);
            }
        })

    });
    return result;
}

const cars = [
    { make: "BMW", model: "X5", color: "Black" },
    { make: "Audi", model: "A4", color: "White" },
    { make: "BMW", model: "X3", color: "Black" },
    { make: "Dacia", model: "Logan", color: "Red" }
];

console.log(propertyValueCollector(cars));

//Exercitiul 15
console.log("Ex15")

function inlineMath(math){
    math=math.split(",");
    const results=math.map(expression=>{
        expression=expression.trim();
        let operator;
        if (expression.includes("+")) operator = "+";
        else if (expression.includes("-")) operator = "-";
        else if (expression.includes("*")) operator = "*";
        else if (expression.includes("/")) operator = "/";
        const numbers=expression.split(operator);

        const a=Number(numbers[0]);
        const b=Number(numbers[1]);
        switch(operator){
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
        }
    });
    return results;
}

const maths="10+5, 20-3, 4*2, 10/2";
console.log(inlineMath(maths));

//Exercitiul 16
console.log("Ex16")

function memoize(fn){
    const cache={};
    return function(...args){
        const key=JSON.stringify(args);
        if (key in cache) {
            console.log("cache");
            return cache[key];
        }
        const result=fn(...args);
        cache[key]=result;
        return result;
    };

}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}
const memorizedFibonacci = memoize(fibonacci);
console.log("Fibonacci(5):", memorizedFibonacci(5));
console.log("Fibonacci(7):", memorizedFibonacci(7));
console.log("Fibonacci(10):", memorizedFibonacci(10));
console.log("Fibonacci(5):", memorizedFibonacci(5));
console.log("Fibonacci(7):", memorizedFibonacci(7));
//Exercitiul 17
console.log("Ex17")

function directoryTree(paths){
    const tree={};

    paths.forEach(path=>{
        const folders=path.split("/");
        let current=tree;
        folders.forEach((folder,index)=>{
            if(index===folders.length-1){
                current[folder]=true;
            }else{
                if(!current[folder]){
                    current[folder]={};
                }
                current=current[folder];
            }
        });
    });
    return tree;
}

const paths = [
    "src/components/button.js",
    "src/components/input.js",
    "src/index.js",
    "README.md"
];
console.log(directoryTree(paths));

//Exercitiul 18
console.log("Ex18")

function anagram(word){
    const result={};

    words.forEach((word)=>{
        const key=word.split("").sort().join("");

        if(!result[key]){
            result[key]=[];
        }
        result[key].push(word);
    })
    return result;

}
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(anagram(words));
//Exercitiul 19
console.log("Ex19")

function runLengthEncoder(str){
    if(str.length==0)
        return str;
    let result="";
    let cnt=1;

    for(let i=1;i<str.length;i++) {
        if (str[i] == str[i - 1]) {
            cnt++;
        } else {
            result += str[i - 1] + cnt;
            cnt = 1;
        }
    }
    result+=str[str.length-1]+cnt;
    if (result.length >= str.length) {
        return str;
    }
    return result;

}

console.log(runLengthEncoder("aaaabbcdddd"));
