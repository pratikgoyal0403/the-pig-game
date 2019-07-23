//==================tip caalculator
var tip;
function tipCalculator(bill)
{
    if(bill < 50){
        tip = bill * (20/100);
        return tip;
    }else if(bill >= 50 && bill <= 200){
        tip = bill * (15/100);
        return tip;
    }else{
        tip = bill * (10/100);
        return tip;
    }
}
var allTips = [tipCalculator(124), tipCalculator(48), tipCalculator(268)];
console.log(allTips);
var totalBills = [tipCalculator(124) + 124, tipCalculator(48) + 48, tipCalculator(268) + 268];
console.log(totalBills);