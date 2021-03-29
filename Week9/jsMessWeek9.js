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

try
{
    //Instantiate the Class.
    let yourDog = new Dog();

    //Show description.
    console.log(yourDog.description);
}
catch
{
    console.error("Oy, one of your variables probably isn't");
}