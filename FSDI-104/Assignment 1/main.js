
//Classes yo
//Construct classes with the below method example
//Create the class and use constructor() while passing it
//arguements that you will use as attributes.
//save tem to a variable within the constructor(){}

class Animal{
    constructor(species, name, age, service, owner, contact, attitude, health){
        this.species=species;
        this.name=name;
        this.age=age;
        this.attitude=attitude;
        this.health=health;
        this.owner=owner;
        this.contact=contact;
        this.service=service;
        this.speak=()=>`Hi I'm ${name} the ${species}. I'm ${age} years old and ${health} because I was a ${attitude} little ${species}.`; 
    }
}
/**Create a constant variable using below syntax
 * pass the new object a parameter for each arguement of the 
 * constructor*/
var pets=[];

const pet0= new Animal("aligator", "Smiles", 20,"Jeff", "Nails", "888-888-8888", "hungry", "alive");
const pet1= new Animal("dog", "Roger", 12,"Clarence","Hair", "888-888-8888", "good", "alive");
const pet2= new Animal("cat", "Rachel", 8,"Trey","Surgery", "888-888-8888", "bad", "dead");
const pet3= new Animal("squirrel", "Henry", 6,"Romeo","Dental", "888-888-8888", "great", "alive");
const pet4= new Animal("skunk", "Waddles", 8,"Samantha","Surgery", "888-888-8888", "stinky", "dead");
//console.log(pet0.speak());

pets.push(pet0);
pets.push(pet1);
pets.push(pet2);
pets.push(pet3);
pets.push(pet4);

let numPets=pets.length;
//Arrays of pet data
function petStuff(){
    console.log(`There are ${numPets} pets registered:`);
    for(i=0; i<pets.length;i++){
            console.log(pets[i].name);
    }
}
petStuff();