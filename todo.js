// Todo list functionality
let todos = [];

// Load todos from localStorage
function loadTodos() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos = JSON.parse(savedTodos);
        renderTodos();
    }
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Add new todo
function addTodo() {
    const input = document.getElementById('newTodoInput');
    const text = input.value.trim();
    
    if (text) {
        todos.push({
            id: Date.now(),
            text: text,
            completed: false
        });
        
        saveTodos();
        renderTodos();
        input.value = '';
    }
}

// Toggle todo completion
function toggleTodo(id) {
    todos = todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
    );
    saveTodos();
    renderTodos();
}

// Delete todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

// Render todos
function renderTodos() {
    const todoItems = document.getElementById('todoItems');
    todoItems.innerHTML = '';
    
    todos.forEach(todo => {
        const div = document.createElement('div');
        div.className = 'todo-item';
        div.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                   onchange="toggleTodo(${todo.id})">
            <span style="${todo.completed ? 'text-decoration: line-through' : ''}">${todo.text}</span>
            <button onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        todoItems.appendChild(div);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', loadTodos); 