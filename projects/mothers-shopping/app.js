var add = function () {
    var task = document.getElementById("task").value;
    var toDoList = getTodoList();
    if (task != "") {
        toDoList.push(task)
    };
    localStorage.setItem("todo", JSON.stringify(toDoList));
    showToDoList();
    return false;
};


var remove = function () {
    var id = this.getAttribute('id');
    var toDoList = getTodoList();
    toDoList.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(toDoList));

    showToDoList();

    return false;
};

var showToDoList = function () {
    var toDoList = getTodoList();
    var html = "<ul>";

    for (var i = 0; i < toDoList.length; i++) {
        html += '<li>' + '<button class="remove" id="' + i + '">x</button>' + "  " + toDoList[i] + '</li>'
    }

    html += "</ul>"

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName("remove");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
};


var getTodoList = function () {
    var toDoList = new Array; //You can also write "new Array";
    var toDoListString = localStorage.getItem("todo");
    if (toDoListString != null) {
        toDoList = JSON.parse(toDoListString);
    }
    return toDoList;
};

document.getElementById("add").addEventListener('click', add);
showToDoList();