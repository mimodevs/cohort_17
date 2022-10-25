const todos = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true
    },
  ];

let todoUl = document.querySelector('ul');

function renderTask(title, completed){

    let todoItem = document.createElement('li');

    todoItem.classList.add('todo'); 

    todoItem.innerHTML = `
      <input type="checkbox" ${ completed ? 'checked' : '' }/>
      <p> ${title} </p> 
      <button class="delete-btn" >x</button>
      `;
    todoUl.appendChild(todoItem);

    let deleteBtns = document.querySelectorAll('.delete-btn');

    deleteBtns.forEach(function(oneDeleteBtn) {
      oneDeleteBtn.onclick = function(){oneDeleteBtn.parentElement.remove() }
    })

  }


for(let i = 0; i < todos.length; i++) {
  renderTask(todos[i].title,todos[i].completed )
}


let newTaskInput = document.querySelector('.new-task-input');
let addBtn = document.querySelector('.add-btn');

addBtn.onclick = function() {

  todos.push(
    {
        userId: 1,
        id: todos.length + 1,
        title: newTaskInput.value, 
        completed: false 
    }
  )
 renderTask(newTaskInput.value, false );

 newTaskInput.value = '';
   

 console.log();
}
