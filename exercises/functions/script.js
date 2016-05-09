//function add(x, y){
//    return x + y;
//};
//
// console.log(add(2, 3));

//function largest(x, y, z){
//    if (x > y && x > z) {
//         console.log(x)
//    } else if (y > z && y > x) {
//         console.log(y)
//    } else if (z > x && z > y) {
//        console.log(z)
//    }
//};
//
//largest(2, 3, 4);

//function checkEven(x){
//     return (x%2 == 0);
//}
//
//x = 4;
//
//if(checkEven(x)){
//    console.log(x +" is an even number!");
//} else {
//    console.log(x + " is an odd number!");
//};
//
//checkEven();

//function myString (x){
//    if (x.length <= 20){
//        console.log(x.concat(x))
//    } else {
//        console.log(x)
//    }
//};
//
//myString(wassssssssup!);
     
function myString(x) {
//    var strLength = str.length;
    if (x.length <= 20) {
        console.log(x.concat(x));
    } else {
        console.log(x.slice(x.length / 2));
    }
};

myString("i need something that is longer than twenty characters long");




