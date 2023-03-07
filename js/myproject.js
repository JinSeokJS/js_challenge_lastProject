const projectForm = document.getElementById("project-form");
const projectInput = projectForm.querySelector("input");
const projectList = document.getElementById("project-list");

const PROJECT_KEY = "projects"

let projects = [];

function saveProjects() {
    localStorage.setItem(PROJECT_KEY, JSON.stringify(projects));
}

function deleteProjects(event) {
    const li = event.target.parentElement;
    li.remove();
    projects = projects.filter((toDo) => toDo.id !== parseInt(li.id));
    saveProjects();
}

function paintprojects(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteProjects)
    li.appendChild(span);
    li.appendChild(button);
    projectList.appendChild(li);
}

function handleProjectSubmit(event) {
    event.preventDefault();
    const newTodo = projectInput.value;
    projectInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    };
    projects.push(newTodoObj);
    paintprojects(newTodoObj);
    saveProjects();
}

projectForm.addEventListener("submit",handleProjectSubmit);

const savedProjects = localStorage.getItem(PROJECT_KEY);

if(savedProjects) {
    const parsedProjects = JSON.parse(savedProjects);
    projects = parsedProjects;
    parsedProjects.forEach(paintprojects);
}