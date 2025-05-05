    const taskInput= document.getElementById("taskInput");
    const taskList= document.getElementById("taskList");

    function addTask() 
 {
    const taskText=taskInput.value;
    if(taskText !==""){
       const
listItem= document.createElement("li");
    listItem.innerHTML= `
      <input type="checkbox">
      <span>${taskText}</span>
     `;
     taskList.appendChild(listItem);

     listItem.querySelector("input[type=checkbox]").addEventListener("click",function(){
     listItem.classList.toggle("completed");
     });
      }
      taskInput.value="";
 }