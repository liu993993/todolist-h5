const STORAGE_KEY = "todolist_h5_items_v1";

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const emptyState = document.querySelector("#emptyState");
const totalCount = document.querySelector("#totalCount");
const doneCount = document.querySelector("#doneCount");

let todos = loadTodos();

function loadTodos() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Failed to read todos from localStorage.", error);
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function createTodo(text) {
  return {
    id: String(Date.now()),
    text,
    done: false,
    createdAt: new Date().toISOString()
  };
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = `todo-item${todo.done ? " is-done" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.className = "todo-check";
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.setAttribute("aria-label", `切换 ${todo.text} 的完成状态`);
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "删除";
    deleteButton.setAttribute("aria-label", `删除 ${todo.text}`);
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    item.append(checkbox, text, deleteButton);
    todoList.appendChild(item);
  });

  updateSummary();
}

function updateSummary() {
  const doneTotal = todos.filter((todo) => todo.done).length;

  totalCount.textContent = String(todos.length);
  doneCount.textContent = String(doneTotal);
  emptyState.classList.toggle("is-hidden", todos.length > 0);
}

function addTodo(text) {
  todos.unshift(createTodo(text));
  saveTodos();
  renderTodos();
}

function toggleTodo(id) {
  todos = todos.map((todo) => {
    if (todo.id !== id) {
      return todo;
    }

    return {
      ...todo,
      done: !todo.done
    };
  });

  saveTodos();
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (!text) {
    todoInput.focus();
    return;
  }

  addTodo(text);
  todoInput.value = "";
  todoInput.focus();
});

renderTodos();
