function twoNumbers(x, y){
    if(x > y){
        console.log(x)
    } else if (y > x) {
        console.log(y)
    } else if (x = y){
        console.log("You put the same number in silly!")
    }
};

twoNumbers(8, 8);


//var whichOne = ("Which idiot do you want to vote for, Donald, Hillary, or Odin?  Enter your choice below")
//function whichIdiot(Donald, Hillary, Odin){
//    if(Donald){
//        console.log(Donald)
//    }
//    if(Hillary){
//        console.log(Hillary)
//    }
//    if(Odin){
//        console.log(Odin)
//    }
//};
//
//console.log(whichOne);
//whichIdiot("Odin");

//function appropriateGreeting(time){
//    now = new Date(),
//    hours = now.getHours(),
//    minutes = now.getMinutes(),
//    ampm = hours >= 12 ? 'PM' : 'AM';
//    
//    hours = hours % 12;
//    minutes = minutes < 10 ? '0' + minutes : minutes;
//    
//    if (time < 12){
//        console.log("Good morning sunshine!")
//    }
//    if (time >= 12 && hours <= 14){
//        console.log("Wake up sleepy head, it's afternoon already.")
//    }
//    if (time < 14){
//        console.log("What's for dinner?")
//    }
//};
//
//appropriateGreeting(15);

//function monkeys(asmile, bsmile){
//    if(asmile && bsmile){
//        console.log("We're in trouble!")
//    }
//    if(asmile && !bsmile){
//        console.log("We're good, it's all good everybody!")
//    }
//    if(!asmile && bsmile){
//        console.log("We're good, it's all good everybody!")
//    }
//    if(!asmile && !bsmile){
//        console.log("We're in trouble!")
//    }
//};
//
//monkeys(true, false);



