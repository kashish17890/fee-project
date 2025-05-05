document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const todoList = document.getElementById('todoList');
    const taskItem = document.createElement('li');
    const taskId = new Date().getTime().toString(); // Unique ID based on timestamp
    taskItem.dataset.id = taskId;

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', function() {
        markTaskComplete(taskId);
    });

    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;

    const priorityBtn = document.createElement('button');
    priorityBtn.innerHTML = '<i class="far fa-flag"></i>'; // Flag icon outline
    priorityBtn.classList.add('priority-btn');
    priorityBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        this.querySelector('i').classList.toggle('fas'); // Filled flag icon
        toggleTaskPriority(taskItem, taskId);
    });

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(taskLabel);

    taskItem.appendChild(leftDiv);
    taskItem.appendChild(priorityBtn);
    todoList.appendChild(taskItem);
}

function markTaskComplete(taskId) {
    const taskItem = document.querySelector(`li[data-id="${taskId}"]`);
    const priorityTaskItem = document.querySelector(`li[data-id="${taskId}"].priority`);

    if (taskItem) {
        taskItem.remove();
    }
    if (priorityTaskItem) {
        priorityTaskItem.remove();
    }

    const completedList = document.getElementById('completedList');
    const completedTaskItem = document.createElement('li');
    completedTaskItem.textContent = taskItem ? taskItem.querySelector('span').textContent : priorityTaskItem.querySelector('span').textContent;
    completedList.appendChild(completedTaskItem);

    // Trigger confetti animation with purple colors
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#800080', '#9370DB', '#BA55D3'] // Different shades of purple
    });
}

function toggleTaskPriority(taskItem, taskId) {
    const priorityList = document.getElementById('priorityList');
    const existingPriorityTask = priorityList.querySelector(`li[data-id="${taskId}"]`);

    if (existingPriorityTask) {
        existingPriorityTask.remove();
    } else {
        const clonedTaskItem = document.createElement('li');
        clonedTaskItem.textContent = taskItem.querySelector('span').textContent;
        clonedTaskItem.classList.add('priority');
        clonedTaskItem.dataset.id = taskId;
        priorityList.appendChild(clonedTaskItem);
    }
}

// Handle dropdown functionality
document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const monthYear = document.getElementById('month-year');
    const daysContainer = document.getElementById('days');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    let currentDate = new Date();

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        daysContainer.innerHTML = '';

        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = prevMonthLastDay - i;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            if (i === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                dayDiv.classList.add('today');
            }
            daysContainer.appendChild(dayDiv);
        }

        const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay();
        for (let i = 1; i < nextMonthStartDay; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }

        monthYear.textContent = `${months[month]} ${year}`;
    }

    prevButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});

document.addEventListener('DOMContentLoaded', function() {
    
    if (localStorage.getItem('changeBg') === 'true') {
        
        document.body.style.backgroundImage = "url('main2.jpg')";
        
        localStorage.removeItem('changeBg');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    
    if (localStorage.getItem('changeBg2') === 'true') {
        
        document.body.style.backgroundImage = "url('main.jpg')";
        
        localStorage.removeItem('changeBg2');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    
    if (localStorage.getItem('changeBg3') === 'true') {
        
        document.body.style.backgroundImage = "url('main3.jpg')";
        
        localStorage.removeItem('changeBg3');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    
    if (localStorage.getItem('changeBg4') === 'true') {
        
        document.body.style.backgroundImage = "url('main5.jpg')";
        
        localStorage.removeItem('changeBg4');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    
    if (localStorage.getItem('changeBg5') === 'true') {
        
        document.body.style.backgroundImage = "url('main1.jpg')";
        
        localStorage.removeItem('changeBg5');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    
    if (localStorage.getItem('changeBg6') === 'true') {
        
        document.body.style.backgroundImage = "url('bg-8.webp')";
        
        localStorage.removeItem('changeBg6');
    }
});
