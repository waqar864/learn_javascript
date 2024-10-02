const name = "waqar khan";
const repoCount = 50;

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('waqarkhan');

//there are multiple methods to define strings 

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3))

const link = "https://www.waqar%20khan.com";

console.log(link.replace("%20", "_"));
console.log(link.includes('sundar'))

const GameName = new String('waqar-khan-com');

console.log(GameName.split('-'));