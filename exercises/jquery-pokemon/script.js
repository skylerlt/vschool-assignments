var url = "http://pokeapi.co/api/v1/pokedex/1/";

var pokemonList = $("#pokemon-list")

$("#getList").click(function () {
    $.ajax(url, {
        success: function (data) {
            var pokemonArray = data.pokemon;
            for (var i = 0; i < pokemonArray.length; i++) {
                //            console.log(pokemonArray[i].name);
                var pokemonName = pokemonArray[i].name;

                var newElement = $('<a target="_blank" href="https://www.google.com/#q=' + pokemonName + '"><div class="col-xs-3 pokemon-badge">' + pokemonName + '</div></a>');
                pokemonList.append(newElement);
            }
        }
    });
});