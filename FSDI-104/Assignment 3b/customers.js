/*Constructing list of sample objects*/
var samplePets=[];
var s1={name:"Terry", species:"dog", age:"5",owner:"Grady"},
    s2={name:"Bill", species:"cat", age:"7",owner:"Liz"},
    s3={name:"Randy", species:"dog", age:"4",owner:"Stephan"},
    s4={name:"Quill", species:"Cat", age:"8",owner:"Paul"};
samplePets.push(s1,s2,s3,s4);
console.log(samplePets);

/* Iterating samplePets and displaying info from each pet on page*/
for(i=0;i<samplePets.length;i++){
    let m=i.toString(), n=("name"+m),
        o=("species"+m), p=("age"+m),
        q=(document), r=samplePets;
    //console.log(n);
    q.getElementById(n).innerHTML=r[i].name;
    q.getElementById(p).innerHTML=r[i].age;
}



