import jquery from "jquery";
const $ = jquery;
// import a task class here

// We get/store tasks in local storage for reloading
let localTasks = localStorage.getItem("tasks");
let tasks = localTasks
    ? JSON.parse(localTasks).map(e => new Task(e))
    : [new Task({ name: "First", date: Date.now() })];

window.drawTasks = () => {
    // empty the list html
    $("#list").html("");
    // loop through each task and append inside
    // instead of passing task on each iteration
    // try to destructure the object

    // LOOP HERE
    $("#list").append($(`<div id="${id}">${name}</div>`));
    // END LOOP HERE
};

$("#list").on("click", "div", function() {
    let indexOfItem = ""; //need to use findIndex
    let currTask = tasks[indexOfItem];
    // Need to add a method inside Task class to update the name
    currTask.updateTask(prompt("Rename task", currTask.name));

    // refresh task list
    window.drawTasks();
});
/**
 * Add a task with prompt
 */
$("#onAddClick").on("click", function() {
    const name = prompt("Name of task?");
    let task = new Task({ name, date: Date.now() });
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    window.drawTasks();
});
