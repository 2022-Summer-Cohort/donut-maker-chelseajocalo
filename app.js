import DonutMaker from "./DonutMaker.js";

const donutCountEl = document.querySelector("#counter");
const autoClickerEl = document.querySelector(".auto-clicker-count");
const clickValueEl = document.querySelector("#click-value");
const multiplierEl = document.querySelector(".multiplier");
const autoClickerCostEl = document.querySelector("#auto-clicker-cost");
const multiplierCostEl = document.querySelector("#multiplier-cost");

const donut = new DonutMaker(0);



const makeDonutsBtn = document.querySelector("#clicker");
let rotate = 90;
makeDonutsBtn.addEventListener("click",() => {
    rotate = rotate + 90;
    makeDonutsBtn.style.transform = `rotate(${rotate}deg)`;
    donut.makeDonuts();
    clickValueEl.innerText = donut._clickValue;
    disableMultiplierBtn();
    donutCountEl.innerText = Math.round(donut._donutCount); 
    disableAutoClickerBtn();
    
})


const autoClickerBtn = document.querySelector("#auto-clicker-button");

function disableAutoClickerBtn(){
    if(donut._donutCount < donut._autoClickerCost){
    autoClickerBtn.setAttribute("disabled", "disabled");
} else if(donut._donutCount > donut._autoClickerCost){
    autoClickerBtn.removeAttribute("disabled"); 
}

}

    autoClickerBtn.addEventListener("click", () => {
      
            disableMultiplierBtn();
            disableAutoClickerBtn();
            donut.buyAutoClicker();
            donutCountEl.innerText = Math.round(donut._donutCount);
            autoClickerCostEl.innerText = Math.round(donut._autoClickerCost);
            autoClickerEl.innerText = donut._autoClicker; 
            
    
})



const donutMultiplierBtn = document.querySelector("#donut-multiplier-button");
function disableMultiplierBtn(){
    if(donut._donutCount < donut._multiplierCost){
        donutMultiplierBtn.setAttribute("disabled","disabled");
    }
    else if(donut._donutCount > donut._multiplierCost){
        donutMultiplierBtn.removeAttribute("disabled");
    }
}
donutMultiplierBtn.addEventListener("click", () => {
        
        donut.buyMultiplier();
        clickValueEl.innerText = Math.round(donut._clickValue*1000)/1000;
        donutCountEl.innerText = Math.round(donut._donutCount);
        multiplierEl.innerText = donut._multiplier;
        disableMultiplierBtn();
        multiplierCostEl.innerText = Math.round(donut._multiplierCost*1000)/1000;
        
})
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", ()=>{
    location.reload();
})
setInterval(() => {
    for(let i =0; i<donut.autoClickerCount; i++){
        donut.makeDonuts();
        
        disableAutoClickerBtn();
        disableMultiplierBtn();
    }
    donutCountEl.innerText = Math.round(donut._donutCount);
    autoClickerCostEl.innerText = Math.round(donut._autoClickerCost);
}, 1000);
