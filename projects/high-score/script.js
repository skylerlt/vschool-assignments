//function submitInfo() {
//    ("First Name: " + document.personalInfo.firstName.value + "\n" + "Last Name: " + document.personalInfo.lastName.value + "\n" + "game: " + document.personalInfo.game.value + "\n" + "Score: " + document.personalInfo.score.value * 1 + "\n" + "Trash talk: " + trashTalk)
//};

var trashTalk;

document.getElementById('trashCheck').addEventListener('change', function () {
    var random = Math.floor((Math.random() * 3) + 1);
    if (random === 1) {
        trashTalk = 'Emiliooooo!';
    } else if (random === 2) {
        trashTalk = "Is that a good score?  Cuz looking at  your score I'd definitely looks like a good score!";
    } else {
        trashTalk = 'Looks like I can have my cake and eat it too!';
    }
});

function submitInfo() {

    var table = document.getElementById('tableInfo');
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = document.personalInfo.playerName.value;
    cell2.innerHTML = document.personalInfo.game.value
    cell3.innerHTML = document.personalInfo.score.value;
    cell4.innerHTML = trashTalk;

    if (!cell1.innerHTML) {
        alert("Make sure you add in a name");
    };

    var elements = document.personalInfo.elements;
    //    console.log(elements);
    //    oForm.reset();
    for (i = 0; i < elements.length; i++) {
        field_type = elements[i].type.toLowerCase();
        switch (field_type) {
        case "text":
            //        case "password":
            //        case "textarea":
            //        case "hidden":
            elements[i].value = "";
            break;
            //        case "radio":
        case "checkbox":
            if (elements[i].checked) {
                elements[i].checked = false;
            }
            break;
        case "select-one":
            //        case "select-multi":
            elements[i].selectedIndex = -1;
            break;
        default:
            break;
        }
    }
};



//function inputName() {
//    var playerName = document.getElementById("name").value;
//    if (playerName === "") {
//        alert("You need to put something in silly!");
//    } else {
//        document.personalInfo.playerName.value;
//    }
//};