//array for storing tasks
let tasks=[];
function addTask(){
    //push contents of input box to task[]
    tasks.push(document.getElementById("new-task").value);
    showTasks();
}

function showTasks(){
    //clear the html box for displaying tasks
    document.getElementById("tasks").innerHTML='';
    //iterate tasks[]
    for(i=0;i<tasks.length;i++){
        //for each item in tasks[] print it to the html box for displaying tasks
        document.getElementById("tasks").innerHTML+=`<li>${tasks[i]}</li>`;
    }
    //console.log(tasks);
}
function removeTask(){
    //remove the last item in tasks[]
    tasks.pop();
    showTasks();
}