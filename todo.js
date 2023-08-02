//Variable declaration
let button = document.getElementById('add');
let todoList = document.getElementById('todoList');
let input = document.getElementById('input');

//Storing list in local storage in an array
let todos = [];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

//Getting input
button.addEventListener('click',()=>{

   //checking for null value
    if(input.value.trim().length==0){
        alert("Please Enter Your Task");
    }
    //checking for maximum characters
    else if(input.value.trim().length>50){
        alert("The task cannot exceed 50 characters.Add your task in short");
    }
    //Getting valid input
    else{ 
        todos.push(input.value);
        localStorage.setItem('todos',JSON.stringify(todos));
        addtodo(input.value);
        input.value='';
    }
})

//Function to add list

function addtodo(todo){

    //creating new element
    let para = document.createElement('p');
    para.innerText = todo;
    
    
    //Adding Class
    para.setAttribute('class','tasklist-container');
    

    //Adding style
    para.style.paddingLeft="30px";
    para.style.background="linear-gradient(140deg, hsla(18, 78%, 48%, 0.678)40%, hsla(339, 67%, 45%, 0.925) 59%)";
    
    //Using html to add trash icon
    para.innerHTML+= ` <span id='tick' class="fas fa-trash"></span> <i id='trash' class="fas fa-check"></i> `;


    
    //Adding element to list
    todoList.appendChild(para);

    
    //Tick Icon Function(To change background)
    const tickIcon = para.querySelector('i');
    tickIcon.display="inline-block";
    tickIcon.addEventListener('click', () => {
    tickIcon.style.display="none";
    para.style.opacity="0.4";
    
 
 });

    //Trash Icon Function(To delete Task)
    const trashIcon=para.querySelector('span');
    trashIcon.display="inline-block";
    trashIcon.addEventListener('click', () => {
    todoList.removeChild(para);
    remove(todo) ;

 });

}

//Remove list

function remove(todo){
    let index = todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index, 1);
      }
    localStorage.setItem('todos',JSON.stringify(todos));
}
