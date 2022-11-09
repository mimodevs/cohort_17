


// render task fucntion
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
    let checkboxesArray = document.querySelectorAll('li > input');  // => [input, input, input, input]

    deleteBtns.forEach(function(oneDeleteBtn) {
      oneDeleteBtn.onclick = function(){
        oneDeleteBtn.parentElement.remove() 
      }
    })

    checkboxesArray.forEach((checkboxInput) => {

      checkboxInput.onchange = () => {
        if (checkboxInput.checked === true ) {
          checkboxInput.nextElementSibling.style.textDecoration='line-through';
          checkboxInput.parentElement.style.opacity = '0.4';
          // checkboxInput.parentElement.style.pointerEvents = 'none';
          return;
        }
        checkboxInput.nextElementSibling.style.textDecoration='none';
      }
    })

  }
  
// add new task
let newTaskInput = document.querySelector('.new-task-input');
let addBtn = document.querySelector('.add-btn');

addBtn.onclick = function() {
 renderTask(newTaskInput.value, false );
 newTaskInput.value = '';
}


// fetch json api data
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(todos => {
  for(let i = 0; i < todos.length; i++){
    renderTask(todos[i].title, todos[i].completed )
  }}
)

