//  Create new XMLHTTPRequest object

var xhr = new XMLHttpRequest();
var pokemon = document.getElementById("pokemon-name");
//  Check the "onreadystatechange" event for changes (event listener)

xhr.onreadystatechange = function () {
    //  when it changes to a readystate of 4 and the response is 200
    if (xhr.readyState === 4 && xhr.status === 200) {
        var object = JSON.parse(xhr.responseText);
        pokemon.innerHTML = object.name;
        //  Do the stuf you want to do with the data.
    }
};

//  Open the request object -  pass in request method and the URL where the data exists
xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/1/", true);

//  Send the request object
xhr.send();