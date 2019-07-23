var john = {
    billAmount : [124, 48, 268, 180, 42],
    tip : [],
    totalBill : [],
    calcTip : function (){
        for( var i = 0; i < this.billAmount.length; i++){
            if(this.billAmount[i] < 50){
                this.tip[i] = (this.billAmount[i] * (20/100));
                this.totalBill[i] = (this.billAmount[i] + this.tip[i]);
            }else if (this.billAmount[i] >= 50 && this.billAmount[i] < 200){
                this.tip[i] = (this.billAmount[i] * (15/100));
                this.totalBill[i] = (this.billAmount[i] + this.tip[i]);
            }else{
                this.tip[i] = (this.billAmount[i] * (10/100));
                this.totalBill[i] = (this.billAmount[i] + this.tip[i]);
            }
        }
    }
};


var mark = {
    billAmount : [77, 475, 110, 45],
    tip : [],
    totalBill : [],
    calcTip : function (){
        for( var i = 0; i<this.billAmount.length; i++){
            if(this.billAmount[i] < 100){
                this.tip[i] = (this.billAmount[i] * (20/100));
                this.totalBill[i] = (this.billAmount[i] + this.tip[i]);
            }else if (this.billAmount[i] >= 100 && this.billAmount[i] < 300){
                this.tip[i] = (this.billAmount[i] * (10/100));
                this.totalBill[i] = (this.billAmount[i] + this.tip[i]);
            }else{
                this.tip[i] = (this.billAmount[i] * (25/100));
                this.totalBill[i] = (this.billAmount[i] + this.tip[i]);
            }
        }
    }
};
john.calcTip();
mark.calcTip();
console.log(john, mark);

function avgTipJohn(){
    let sumTip = 0;
    for(var i=0; i<john.tip.length;i++){
        sumTip = sumTip + john.tip[i];
    }
    var avgtip = sumTip / john.tip.length;
    return avgtip;
}

function avgTipMark(){
    let sumTip = 0;
    for(var i = 0; i<mark.tip.length; i++){
        sumTip = sumTip + mark.tip[i];
    }
    var avgTip = sumTip / mark.tip.length;
        return avgTip;
}

var averageTipJohn = avgTipJohn();
var averageTipMark = avgTipMark();

console.log(averageTipJohn, averageTipMark);

averageTipJohn > averageTipMark ? console.log('john paid ' + averageTipJohn) : console.log('mark paid ' + averageTipMark);