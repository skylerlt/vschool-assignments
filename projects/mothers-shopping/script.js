var add = function () {
    var item = document.getElementById("item").value;
    var shoppingList = getShoppingList();
    if (item != "") {
        shoppingList.push(item)
    };
    localStorage.setItem("todo", JSON.stringify(shoppingList));
    showShoppingList();
    return false;
};


var remove = function () {
    var id = this.getAttribute('id');
    var shoppingList = getShoppingList();
    shoppingList.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(shoppingList));

    showShoppingList();

    return false;
};

var showShoppingList = function () {
    var shoppingList = getShoppingList();
    var html = "<ul>";

    for (var i = 0; i < shoppingList.length; i++) {
        html += '<li>' + '<button class="remove" id="' + i + '">x</button>' + "  " + shoppingList[i] + '</li>'
    }

    html += "</ul>"

    document.getElementById('listItems').innerHTML = html;

    var buttons = document.getElementsByClassName("remove");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
};


var getShoppingList = function () {
    var shoppingList = new Array;
    var shoppingListString = localStorage.getItem("todo");
    if (shoppingListString != null) {
        shoppingList = JSON.parse(shoppingListString);
    }
    return shoppingList;
};

document.getElementById("add").addEventListener('click', add);
showToDoList();