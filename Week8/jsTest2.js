//Alrighty boys, we have an objective
//Create Dog class
//Add setter method description, to assign values to the property
//Add getter method description, to return the values in a sentence.
//Create an object using Dog class
//Set the description
//Log the description sentence to the console by calling the yourDog.description property

//Create class
class Dog 
{
    //
    constructor()  //Runs once the class is instantiated.
    {
        //
    this.color = "brown";
    this.breed = "Beagle";
    this.name = "Jeffy";
    }

    set description(value) //Writes to a property
    {
        this.color = dogColor;
        this.breed = dogBreed;
        this.name = dogName;
    }

    get description() //Read from a property
    {
        return this.name + " is a " + this.color + " " + this.breed; 
    }

    

}

//Instantiate the Class.
let yourDog = new Dog();

//Show description.
console.log(yourDog.description);