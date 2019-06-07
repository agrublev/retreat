import jquery from "jquery";
const $ = jquery;
import Task from "./task.js";
let localTasks = localStorage.getItem("tasks");
let tasks = localTasks
    ? JSON.parse(localTasks).map(e => new Task(e))
    : [new Task({ name: "First", date: Date.now() })];

window.drawTasks = () => {
    $("#list").html("");
    tasks.forEach(({ name, id }) => {
        $("#list").append($(`<div id="${id}">${name}</div>`));
    });
};

$("#list").on("click", "div", function() {
    let indexOfItem = tasks.findIndex(e => $(this).attr("id") === e.id);
    let currTask = tasks[indexOfItem];
    currTask.updateTask(prompt("Rename task", currTask.name));
    window.drawTasks();
});

$("#onAddClick").on("click", function() {
    const name = prompt("Name of task?");
    let task = new Task({ name, date: Date.now() });
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    window.drawTasks();
});
