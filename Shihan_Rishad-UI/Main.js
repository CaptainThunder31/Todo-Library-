const app = new TodoApp();
function dom(query) { // Just do it faster 😂
  return document.querySelector(query);
}
var listscroll = dom(".listscroll");
let listheight;
setTimeout(() => {
  listscroll.scrollTo({
    top: listscroll.scrollHeight,
    behavior: 'smooth'
  });
  listheight = listscroll.scrollHeight;

}, 500);
  
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  app.getTasks().forEach((task, index) => {
    const taskItem = document.createElement('md-list-item');
    taskItem.className = 'task' + (task.completed ? ' completed' : '');
    // let tasktype = taskItem.createAttribute("type");
    // tasktype.value = "button";
    taskItem.type = "button";
    taskItem.innerHTML = `
      <span slot="headline">${task.task}</span>
      <span slot="end">
            <md-icon-button onclick="markAsCompleted(${index})">
              <md-icon><i class="material-symbols-rounded">check</i></md-icon>
            </md-icon-button>
            <md-icon-button onclick="removeTask(${index})">
              <md-icon><i class="material-symbols-rounded">delete</i></md-icon>
            </md-icon-button>
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

setTimeout(() => {
    listscroll.scrollTo({
      top: listscroll.scrollHeight,
      behavior: 'smooth'
    });
}, 100);
}

document.querySelector("#newTask").addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      addTask()
    }
  });

function removeTask(index) {
  let sure = true
  if (sure) {
    app.removeTask(index);
  }
  renderTasks();
}

function markAsCompleted(index) {
  app.markAsCompleted(index);
  renderTasks();
}

renderTasks();
