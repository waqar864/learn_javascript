// for of

const myArr = [1,2,3,4,5,6,7,8,9,10];

for (const i of myArr){
    console.log(i);
}

const greetings = "Hello world";
for (const greet of greetings){
    console.log(`Each char is ${greet}`);
}

//maps

const map = new Map();
map.set('PK','Pakistan')
map.set('USA','United states of amarica')
map.set('FR','France')

console.log(map);

for (const [key, value] of map){
    console.log(key, ':-', value)
}