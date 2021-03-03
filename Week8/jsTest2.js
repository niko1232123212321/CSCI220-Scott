//Create Dog class


class Dog
{
    constructor()
    {
    this.color = "brown";
    this.breed = "Beagle";
    this.name = "Jeffy";
    }
    set description(value)
    {
       [this.color, this.breed, this.name] = value.split(" ")
    }

    get description()
    {
        return this.name + " is a " + this.color + " " + this.breed;
    }

    

}


//Give properties of color, breed, and name