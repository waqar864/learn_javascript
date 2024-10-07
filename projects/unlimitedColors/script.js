//genrate random color 

const randomColor = ()=>{
    // const r = Math.floor(Math.random()*256);
    // const g = Math.floor(Math.random()*256);
    // const b = Math.floor(Math.random()*256);
    // return `rgb(${r},${g},${b})`;
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color = color + hex[Math.floor(Math.random()*16)];
    }
    return color;
    console.log(color);
}
console.log(randomColor());
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBGColor,1000);
    }
    
    function changeBGColor(){
        document.body.style.backgroundColor = randomColor();
    }
    
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector('#start').addEventListener('click',()=>{
    startChangingColor();
})
document.querySelector('#stop').addEventListener('click',()=>{
    stopChangingColor();
})