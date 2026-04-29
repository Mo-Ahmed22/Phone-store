function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");

    const leftDiv = document.createElement("div");
    leftDiv.className = "task-left";

    const circle = document.createElement("div");
    circle.className = "circle";

    const span = document.createElement("span");
    span.textContent = taskText;

    circle.onclick = function () {
        span.classList.toggle("completed");
    };

    leftDiv.appendChild(circle);
    leftDiv.appendChild(span);

    const del = document.createElement("span");
    del.textContent = "❌";
    del.className = "delete";

    del.onclick = function () {
        li.remove();
    };

    li.appendChild(leftDiv);
    li.appendChild(del);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}