// let myName = "waqar khan   ";

// console.log(myName.trueLength);

let myHeroes = ["batman","spiderman","superman"];

let HeroPower = {
    batman : "batpower",
    spiderman : "spiderpower",
    superman : "superpower",

    getSpiderPower: function(){
        console.log(`spidy power is${this.spiderman}`);
    }
}

Object.prototype.waqar = function(){
    console.log(`waqar is present in all objects`)
}
myHeroes.waqar();
// HeroPower.waqar();

// Object.setPrototypeOf(HeroPower,HeroPower) // new syntax prototype