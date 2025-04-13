const taskContent = document.getElementById('newTaskContent');
const appContent = document.getElementById('app_content');

let tasks = [
    // {
    //     id: crypto.randomUUID(),
    //     content: "Zadanie 1",
    //     description: "Opis zadania 1",
    //     isDone: false
    // },
    // {
    //     id: crypto.randomUUID(),
    //     content: "Zadanie 2",
    //     description: "Opis zadania 2",
    //     isDone: false
    // }
];

// INIT:
const mytasks = localStorage.getItem("mytasks");

if(mytasks) {
    tasks = JSON.parse(mytasks);
}

tasks.forEach( task => {
    const taskItem = document.createElement('task-item');
    taskItem.setAttribute('task', task.content);
    taskItem.setAttribute('description', task.description);
    taskItem.setAttribute('isDone', task.isDone);
    taskItem.setAttribute('id', task.id);

    appContent.appendChild(taskItem);
})

document.getElementById('addNewTaskButton').onclick = () => {
    const content = taskContent.value;

    const task = {
        id: crypto.randomUUID(),
        content: content,
        description: "",
        isDone: false
    };

    tasks.push(task);

    localStorage.setItem("mytasks", JSON.stringify(tasks));

    const taskItem = document.createElement('task-item');
    taskItem.setAttribute('task', task.content);
    taskItem.setAttribute('description', task.description);
    taskItem.setAttribute('isDone', task.isDone);
    taskItem.setAttribute('id', task.id);

    appContent.appendChild(taskItem);

    taskContent.value = '';
}