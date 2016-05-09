/*
The parameter weekday is true if it is a weekday, 
and the parameter vacation is true if we are on 
vacation. We sleep in if it is not a weekday or 
we're on vacation. Return true if we sleep in.

sleepIn(false, false) → true
sleepIn(true, false) → false
sleepIn(false, true) → true
*/

//function sleepIn(weekday, vacation) {
//    weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
//    
//    if (weekday = true){
//        console.log("I can't sleep in today because it's a weekday.")
//    } else {
//        console.log("I can totally sleep in today, isn't that awesome!  I only wish I didn't have kids becuase there's no sleeping in with kids...")
//    }
//};
//
//console.log(sleepIn());

//function sleepIn(weekday, vacation) {
//    if (vacation) {
//        return true;
//    } else {
//        if (!weekday) {
//            return true;
//        } else {
//            return false;
//        }
//    }
//}
//
//console.log(sleepIn(true, false));

//function sleepIn(weekday, vacation) {
//   if (weekday === false && vacation === false) {
//       return true; 
//   } else if (weekday === true && vacation === false) {
//       return false; 
//   } else {
//       return true; 
//   }
//};
//
//console.log(sleepIn(false, false));
//console.log(sleepIn(true, false));
//console.log(sleepIn(false, true));
//console.log(sleepIn(true, true));

function sleepIn(weekday, vacation) {
        return (!weekday || vacation)
};




