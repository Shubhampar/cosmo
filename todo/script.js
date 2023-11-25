// Function to retrieve tasks from local storage
function getTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
  }
  
  // Function to display tasks
  function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    const tasks = getTasks();
  
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task;
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
      deleteButton.onclick = () => deleteTask(index);
      
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });
  }
  
  // Function to add a new task
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
  
    if (task !== '') {
      const tasks = getTasks();
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      taskInput.value = '';
      displayTasks();
    }
  }
  
  // Function to delete a task
  function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }
  
  // Display tasks when the page loads
  displayTasks();
  