function oldVersion() {
  let isCompleted = false;
  function showResult() {
    // if (isCompleted == false) {
    //   let task = document.getElementById("task");
    //   task.innerHTML = "<del>" + task.innerHTML + "</del>";
    //   let sym = document.getElementById("radio");
    //   sym.innerText = "radio_button_checked";
    //   isCompleted = true;
    // } else {
    //   let task = document.getElementById("task");
    //   task.innerHTML = task.innerText;
    //   let sym = document.getElementById("radio");
    //   sym.innerText = "radio_button_unchecked";
    //   isCompleted = false;
    // }
    let todoCol = document.getElementById("todo");
    let completeCol = document.getElementById("complete");
    let taskData = JSON.parse(localStorage.getItem("tasks")) || [];
    let clutter = "";
    taskData.forEach((elem) => {
      let div = document.createElement("div");
      clutter =
        clutter +
        `<span onclick="showResult();" id="radio" class="material-symbols-outlined">
    radio_button_unchecked
</span> <span id="task">${elem.task}</span>`; // Continue from here
    });
  }

  function addTask() {
    let newTask = document.getElementById("newTask").value;
    let div = document.createElement("div");
    div.innerHTML = `            <span onclick="showResult();" id="radio" class="material-symbols-outlined">
    radio_button_unchecked
</span> <span id="task">${newTask}</span>`;
    div.classList = "task";
    let todo = document.getElementById("todo");
    todo.appendChild(div);

    let task = {
      task: newTask,
      status: "todo",
    };
    let taskData = JSON.parse(localStorage.getItem("tasks")) || [];
    taskData.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskData));
  }
}

let tasks = document.querySelector("#tasks");
tasks.addEventListener("click", function (dets) {
  console.log(dets.target.id);
  let todo = JSON.parse(localStorage.getItem("todo")) || [];
  let newTodo = [];
  todo.forEach(function (val) {
    if (val.task != dets.target.id) {
      let newTask = {
        task: `${val.task}`,
        taskStatus: `${val.taskStatus}`,
      };
      newTodo.push(newTask);
    } else {
      let newTask = {
        task: `${val.task}`,
        taskStatus: "completed",
      };
      newTodo.push(newTask);
    }
  });
  localStorage.setItem("todo", JSON.stringify(newTodo));
  showTasks();
});

document.getElementById("completed")
.addEventListener("click", function(dets){
  let todo = JSON.parse(localStorage.getItem('todo')) || [];
  let newTodo = [];
  todo.forEach(function (val) {
    if (val.task == dets.target.id) {
      let newTask = {
        task: `${val.task}`,
        taskStatus: 'todo',
      };
      newTodo.push(newTask);
    } else {
      let newTask = {
        task: `${val.task}`,
        taskStatus: `${val.taskStatus}`,
      };
      newTodo.push(newTask);
    }
  });
  localStorage.setItem("todo", JSON.stringify(newTodo));
  showTasks();
})

document.getElementById("add").addEventListener("click", function () {
  let task = document.getElementById("input").value;
  console.log(task);
  let todo = JSON.parse(localStorage.getItem("todo")) || [];
  let newTask = {
    task: `${task}`,
    taskStatus: "todo",
  };
  todo.push(newTask);
  localStorage.setItem("todo", JSON.stringify(todo));
  showTasks();
  let taskBox = document.getElementById("addTaskBox");
  taskBox.style.scale = 0;
  document.getElementById("input").value = "";
});


function showTasks() {
  let todo = JSON.parse(localStorage.getItem("todo")) || [];
  let tasks = document.getElementById("tasks");
  let completedTasks = document.getElementById("completed");
  let clusterTasks = "";
  let clusterCompleted = "";
  todo.forEach(function (val) {
    if (val.taskStatus == "todo") {
      clusterTasks += `<div class="task" id="${val.task}">
              <span class="material-symbols-outlined">check_box_outline_blank</span>
               ${val.task}
          </div>`;
    } else {
      clusterCompleted += `<div class="task" id="${val.task}">
              <span class="material-symbols-outlined">select_check_box</span>
               ${val.task}
          </div>`;
    }
  });
  tasks.innerHTML = clusterTasks;
  completedTasks.innerHTML = clusterCompleted;
}

document.addEventListener("DOMContentLoaded", showTasks);

document.getElementById("add-btn")
.addEventListener("click", function(){
  let taskBox = document.getElementById("addTaskBox");
  taskBox.style.scale = 1;
})

document.getElementById("cancel")
.addEventListener("click", function(){
  let taskBox = document.getElementById("addTaskBox");
  taskBox.style.scale = 0;
})


