document.getElementById('add-btn').addEventListener('click', addTask);
document.getElementById('clear-completed-btn').addEventListener('click', clearCompletedTasks);

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="removeTask(this)">x</button>
  `;
  document.getElementById('task-list').appendChild(taskItem);
  taskInput.value = '';
}

function removeTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}

function toggleComplete(taskSpan) {
  taskSpan.parentElement.classList.toggle('completed');
}

function clearCompletedTasks() {
  const completedTasks = document.querySelectorAll('.task-item.completed');
  completedTasks.forEach(task => task.remove());
}
