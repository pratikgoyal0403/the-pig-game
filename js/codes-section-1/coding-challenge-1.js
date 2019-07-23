//=============================coding challenge 1-------------------------------------------------------------------//
var johnWeight = 90, mikeWeight = 70, johnHeight = 1.7, mikeHeight = 1.5, bmiJohn, bmiMike;
bmiJohn = johnWeight / (johnHeight * johnHeight);
bmiMike = mikeWeight / (mikeHeight * mikeHeight);

bmiJohn > bmiMike ? console.log(bmiJohn + " john's bmi is geater") : console.log(bmiMike + ' mike\'s bmi is greater');