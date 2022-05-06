const input = document.getElementById("todo-input");
const form = document.getElementById("todo-form");
const list = document.getElementById("list");

const handleTodoSubmit = (e) => {
  e.preventDefault();
  const newChild = document.createElement("li");
  newChild.innerHTML = input.value;
  list.appendChild(newChild);
  input.value = "";
};

form.addEventListener("submit", handleTodoSubmit);
