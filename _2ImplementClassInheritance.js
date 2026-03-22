//2.How to implement class inheritance in javascript
// Parent class
class Car{

    constructor(name, model){
        this.name = name;
        this.model = model;
    }

    start(){
        console.log(`my car name is ${this.name}`)
    }
    end(){
        console.log("end method" )
    }
}
// child class
class ElectricCar extends Car{

    dashboard(){
        console.log("Dashboard start");
    }

    start(){
        super.start(); // super keyword is used to call parent method in child class
        super.end();
        this.dashboard(); //to call the method in same class
        
    }
}
class RemoteCar extends ElectricCar{

    subChild(){
        console.log("Sub child");
    }

    start(){
        super.start(); // super keyword is used to call parent method in child class
        this.subChild();
        
    }
}
// object
tesla = new RemoteCar("Tesla", 850);
tesla.start();