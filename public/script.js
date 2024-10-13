const app = new TodoApp();
  
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  app.getTasks().forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task' + (task.completed ? ' completed' : '');
    taskItem.innerHTML = `
      <span>${task.task}</span>
      <span>
        <button onclick="markAsCompleted(${index})">Complete</button>
        <button onclick="removeTask(${index})">Remove</button>
      </span>
    `;
    taskList.appendChild(taskItem);
  });
}

function addTask() {
  const newTask = document.getElementById('newTask').value;
  if (newTask) {
    app.addTask(newTask);
    document.getElementById('newTask').value = '';
    renderTasks();
  }
}

document.querySelector("#newTask").addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      addTask()
    }
  });

function removeTask(index) {
  app.removeTask(index);
  renderTasks();
}

function markAsCompleted(index) {
  app.markAsCompleted(index);
  renderTasks();
}

renderTasks();