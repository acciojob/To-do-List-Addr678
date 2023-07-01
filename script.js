//your code here
// Get the necessary elements from the DOM
const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

// Function to handle adding a new todo
function addTodo() {
  // Get the value of the input
  const newTodo = newTodoInput.value.trim();

  // Validate the input (not empty)
  if (newTodo === "") {
    alert("Please enter a valid todo item.");
    return;
  }

  // Create a new list item
  const todoItem = document.createElement("li");
  todoItem.textContent = newTodo;

  // Add the new item to the todo list
  todoList.appendChild(todoItem);

  // Clear the input
  newTodoInput.value = "";
}

// Event listener for the "Add todo" button
addTodoBtn.addEventListener("click", addTodo);


