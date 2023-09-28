document.addEventListener("DOMContentLoaded", function() {
    const taskCards = document.querySelectorAll('.task-card');

    taskCards.forEach((taskCard, index) => {
        taskCard.addEventListener('click', () => {
            const clonedTaskCard = taskCard.cloneNode(true);
            localStorage.setItem(`clonedTask_${index}`, clonedTaskCard.outerHTML);
            // window.location.href = 'object.html'; 
        });
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//     const taskContainer = document.getElementById('task-container');

//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         if (key.startsWith('clonedTask_')) {
//             const clonedTaskHtml = localStorage.getItem(key);
//             const clonedTaskElement = document.createElement('div');
//             clonedTaskElement.innerHTML = clonedTaskHtml;
//             taskContainer.appendChild(clonedTaskElement);
           
//         }
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const taskContainer = document.getElementById('task-container');

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('clonedTask_')) {
            const clonedTaskHtml = localStorage.getItem(key);
            const clonedTaskElement = document.createElement('div');
            clonedTaskElement.className = 'task-item'; // Aggiungi una classe per il div del task
            clonedTaskElement.innerHTML = clonedTaskHtml;
            
            // Creare un bottone per ogni task
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'DELETE';
            deleteButton.className = 'delete-button';
            
            // Aggiungere un gestore di eventi al bottone per eliminarlo
            deleteButton.addEventListener('click', function() {
                // Rimuovere il div del task e il suo corrispondente dato nel localStorage
                taskContainer.removeChild(clonedTaskElement);
                localStorage.removeItem(key);
            });
            
            // Aggiungere il bottone al div del task
            clonedTaskElement.appendChild(deleteButton);
            
            // Aggiungere il div del task al contenitore
            taskContainer.appendChild(clonedTaskElement);
        }
    }
});


