class TodoApp {
  constructor() {
    this.tasks = [];
    this.loadFromStorage();
  }

  // Add a new task
  addTask(task) {
    this.tasks.push({ task, completed: false });
    this.saveToStorage();
  }

  // Remove a task by index
  removeTask(index) {
    this.tasks.splice(index, 1);
    this.saveToStorage();
  }

  // Mark task as completed by index
  markAsCompleted(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
      this.saveToStorage();
    }
  }

  // Get tasks based on filter ('all', 'completed', 'pending')
  getTasks(filter = 'all') {
    switch (filter) {
      case 'completed':
        return this.tasks.filter(task => task.completed);
      case 'pending':
        return this.tasks.filter(task => !task.completed);
      default:
        return this.tasks;
    }
  }

  // Save tasks to localStorage
  saveToStorage() {
    localStorage.setItem('todoAppTasks', JSON.stringify(this.tasks));
  }

  // Load tasks from localStorage
  loadFromStorage() {
    const storedTasks = JSON.parse(localStorage.getItem('todoAppTasks'));
    if (storedTasks) {
      this.tasks = storedTasks;
    }
  }
}
