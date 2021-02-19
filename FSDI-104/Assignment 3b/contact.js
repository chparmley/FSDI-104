let contactInfo=[];
const attributes=["name","phone","email"];
/*  */
function contactCustomer(){
    for(i=0;i<attributes.length;i++){
        x=document.getElementById(attributes[i]);
        contactInfo[i]=(x.value);
    }
    console.log(contactInfo);
    document.getElementById("contact").innerHTML=(`Thank you ${contactInfo[0]},
    you'll hear from us soon.`)
}