document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener('submit', addTask)
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("deleteForm").addEventListener('submit', deleteTask)
});

function addTask(event) {
  event.preventDefault()
  const input = event.target.querySelector('input').value
  const lists = document.getElementById('tasks')
  const value = document.createElement('li')
  value.textContent = input
  lists.appendChild(value)
  document.getElementById('new-task-description').value = ""
}

function deleteTask(event) {
  event.preventDefault()
  const input = event.target.querySelector('input').value
  const num = parseInt(input)
  const value = document.getElementById('tasks')
  value.removeChild(value.childNodes[num])
  document.getElementById('delete description').value = ""
}