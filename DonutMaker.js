class DonutMaker{
    constructor(donutCount){
        this._donutCount = donutCount;
        this._autoClicker = 0;
        this._multiplier = 0;
        this._clickValue = 1;
        this._autoClickerCost = 100;
        this._multiplierCost = 10;
    }

    get donutCount(){
        return this._donutCount;
    }
    makeDonuts(){
        this._donutCount+=this._clickValue;
        
    }
    get autoClickerCount(){
        return this._autoClicker;
    }
    buyAutoClicker(){
        this._donutCount-=this._autoClickerCost;
        this._autoClicker++;
        this._autoClickerCost*=1.1;
        
    }
    buyMultiplier(){
        this._donutCount-=this._multiplierCost;
        this._multiplier++;
        this._multiplierCost*=1.1;
        this._clickValue = Math.pow(1.2, this._multiplier);
    }
}

export default DonutMaker;