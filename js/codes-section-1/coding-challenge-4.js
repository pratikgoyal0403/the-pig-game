var pratik = {
    firstName : 'pratik',
    lastName : 'goyal',
    birthyear : 2000,
    aim : 'webdeveloper',
    ismarried : false,
    calcAge : function(){
        this.age = 2019 - this.birthyear;
    }
};
pratik.calcAge();
console.log(pratik);

// this keyword means the name of object for example
//above this.age is similar to pratik.age..



//coding challange

var john = {
    firstName : 'john',
    lastName : 'smith',
    height : 1.95,
    weight : 92,
    calcBmi : function(){
        this.bmiJohn = this.weight / (this.height * this.height);
        
    }
};




var mark = {
    firstName : 'mark',
    lastName : 'smith',
    height : 1.69,
    weight : 78,
    calcBmi : function(){
        this.bmiMark = this.weight / (this.height * this.height);
    }
};


mark.calcBmi();
john.calcBmi();



var result = john.bmiJohn > mark.bmiMark ? 'john\'s bmi is greater than mark' : 'mark\'s bmi is greater than john';

console.log(result, john, mark);