
var input = 'bookkeeper larry'.split("");

// output
// No duplicates: 'bokepr lay'
// The Misfits: 'okeerr'

var noDupes = [];
var extras = [];

for (var i = 0; i < input.length; i++){
    // loop throught input array
        //  if current item already in noDupes
    if(noDupes.indexOf(input[i]) > -1) {
        //  add extras
        extras.push(input[i]);
    } else {
        //  add to noDupes
        noDupes.push(input[i]);
    }
            
}
//  join noDupes
console.log(noDupes.join(""));
//  join extras
console.log(extras.join(""));
//  console.log everything
