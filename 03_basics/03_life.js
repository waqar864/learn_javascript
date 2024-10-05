//imidiate invoke functions expressions


(function chai(){
    console.log("DB Connected");
})();

((name) =>{
    console.log(`DB Connected Two ${name}`);
})("waqar khan");