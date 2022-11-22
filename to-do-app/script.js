// render task fucntion
let todoUl = document.querySelector('ul');

function renderTask(title, completed, author){
    let todoItem = document.createElement('li');
    todoItem.classList.add('todo'); 

    todoItem.innerHTML = `
      <input type="checkbox" ${ completed ? 'checked' : '' }/>
      <p> ${title} </p>
      <button class="delete-btn" >x</button>
      <p> ${author} </p>
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
fetch('https://my-json-server.typicode.com/abed42/emoji-do/db')
  .then(response => response.json())
  .then(data => {
    let todos = data.todos;
  for(let i = 0; i < todos.length; i++){
    renderTask(todos[i].title, todos[i].completed, data.profile.name )
  }}
)

// https://my-json-server.typicode.com/abed42/emoji-do/todos
  
fetch('https://my-json-server.typicode.com/abed42/emoji-do/todos',{
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 1,
        id: 10,
        title: "whatever new task",
        completed: false
      })
    }
)
.then((response) => response.json())
.then((data)=> console.log(data));


const cars = ['toyota', 'mazda']



cars.push('tesla');

function greet(name) {
  console.log('Welcome, ' + name + '!');
  let motorbikes = ['suzuki', 'kawasaki']; 
  if(name === 'Lucy') {
    console.log(name = " owns a " + motorbikes[1]);
  }
}
motorbikes

// // greet('Lucy');

