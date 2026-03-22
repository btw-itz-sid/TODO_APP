// ===== STATE =====
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

// ===== ELEMENTS =====
const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");
const filterBtns = document.querySelectorAll(".filter-btn");
const totalCount = document.querySelector("#totalCount");
const doneCount = document.querySelector("#doneCount");
const pendingCount = document.querySelector("#pendingCount");

// ===== SAVE TO LOCALSTORAGE =====
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// ===== RENDER TODOS =====
function renderTodos() {
    // Filter karo
    let filtered = todos;
    if (currentFilter === "done") {
        filtered = todos.filter(t => t.done);
    } else if (currentFilter === "pending") {
        filtered = todos.filter(t => !t.done);
    }

    // List clear karo
    todoList.innerHTML = "";

    // Empty state
    if (filtered.length === 0) {
        todoList.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                ${currentFilter === "all"
                ? "Koi bounty nahi — Scribe a quest, Captain! ⚓"
                : "Is sea mein koi bounty nahi mili"}
            </div>`;
        updateStats();
        return;
    }

    // Har todo render karo
    filtered.forEach(todo => {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        if (todo.done) li.classList.add("done");

        // Random rotation
        const randomRot = (Math.random() * 4 - 2).toFixed(1);
        li.style.transform = `rotate(${randomRot}deg)`;

        // Crew info
        const crewLead = todo.crew || "Luffy";
        const crewEmoji = {
            "Luffy": "👒", "Zoro": "⚔️", "Nami": "🍊", "Usopp": "🏹", 
            "Sanji": "🍳", "Chopper": "🦌", "Robin": "🌸", "Franky": "🛠️", 
            "Brook": "💀", "Jinbe": "🌊"
        }[crewLead] || "👒";

        li.innerHTML = `
            <div class="wanted-stamp">WANTED</div>
            <div class="reward">REWARD: ฿ ${todo.reward || '1,000,000'}</div>
            <div class="crew-lead">LEAD: ${crewEmoji} ${crewLead}</div>
            <span>${todo.text}</span>
            <div class="todo-controls">
                <input 
                    type="checkbox" 
                    ${todo.done ? "checked" : ""} 
                    data-id="${todo.id}"
                />
                <button class="delete-btn" data-id="${todo.id}">DELETE</button>
            </div>
            ${todo.done ? '<div class="claimed-mark">CLAIMED</div>' : ''}
        `;

        todoList.appendChild(li);
    });

    updateStats();
}

// ===== ADD TODO =====
function addTodo() {
    const text = input.value.trim();

    if (text === "") {
        alert("Pehle kuch likho!");
        return;
    }

    const rewards = ["500,000", "1,500,000", "5,000,000", "10,000,000", "50,000,000", "100,000,000"];
    const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
    
    // Assign random crew member
    const crewMembers = ["Luffy", "Zoro", "Nami", "Usopp", "Sanji", "Chopper", "Robin", "Franky", "Brook", "Jinbe"];
    const randomCrew = crewMembers[Math.floor(Math.random() * crewMembers.length)];

    const newTodo = {
        id: Date.now(),
        text: text,
        done: false,
        reward: randomReward,
        crew: randomCrew
    };

    todos.push(newTodo);
    saveTodos();
    renderTodos();
    input.value = "";
}

// ===== TOGGLE DONE =====
function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, done: !todo.done };
        }
        return todo;
    });
    saveTodos();
    renderTodos();
}

// ===== DELETE TODO =====
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

// ===== EVENT LISTENERS =====

// Add button click
addBtn.addEventListener("click", addTodo);

// Enter key press
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTodo();
});

// Checkbox aur delete — event delegation
todoList.addEventListener("click", (e) => {
    const id = Number(e.target.dataset.id);

    if (e.target.type === "checkbox") {
        toggleTodo(id);
    }

    if (e.target.classList.contains("delete-btn")) {
        deleteTodo(id);
    }
});

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderTodos();
    });
});

// ===== INITIAL RENDER =====
renderTodos();