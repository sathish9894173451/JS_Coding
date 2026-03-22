// To Start Js file -- type in command promt or terminal using the below command
// node filename 

//1.How to define a class with properties and methods in javascript?     
    //class 
class Car{

    constructor(name, model){
        this.name = name;
        this.model = model;
    }
//method
    start(){
        console.log(`my car is ${this.name}`)
    }
}
// object
   bmw = new Car("sportscar", 650);
   bmw.start();
