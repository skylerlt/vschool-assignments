function processForm() {
    alert("First Name: " + myTravelForm.firstName.value + "\n" + "Last Name: " + myTravelForm.lastName.value + "\n" + "Age: " + myTravelForm.age.value + "\n" + "Gender: " + myTravelForm.gender.value + "\n" + "Destination: " + myTravelForm.destination.value + "\n" + "Dietary Restrictions: " + checkedDiet(document.myTravelForm.diet));
};

function checkedDiet(dietArray) {
    var dietString = "";
    for (i = 0; i < dietArray.length; i++) {
        if (dietArray[i].checked) {
            dietString += dietArray[i].value + ", ";
        }
    }
    return dietString;
};

//function processForm() {
//    alert(
//        "First Name: " + document.travelForm.firstName.value + "\n" +
//        "Last Name: " + document.travelForm.lastName.value + "\n" +
//        "Gender: " + document.travelForm.gender.value + "\n" +
//        "Location: " + document.travelForm.location.value + "\n" +
//        "Dietary Restrictions: " + buildDietString(document.travelForm.diet)
//    );
//}
//
//function buildDietString(dietArray) {
//    var dietString = "";
//
//    for (var i = 0; i < dietArray.length; i++) {
//        if (dietArray[i].checked) {
//            dietString += dietArray[i].value + " ";
//        }
//    }
//
//    if (!dietString) {
//        dietString = "None";
//    }
//    return dietString;
//}