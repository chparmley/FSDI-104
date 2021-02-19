let newPet=[];
const attributes=["name","species","age","owner","temperment","service"];
/*  */
function registerPet(){
    for(i=0;i<attributes.length;i++){
        x=document.getElementById(attributes[i]);
        newPet[i]=(x.value);
    }
    console.log(newPet);
    document.getElementById("completed").innerHTML=(`Thank you ${newPet[3]},
    can't wait to do ${newPet[0]}'s ${newPet[5]}!`)
}