//  Given an array of numbers return the number 2 if it is followed by another 2

function has22(nums) {

    return /22/.test(nums.join(""));

};

console.log(has22([1, 2, 2]));
console.log(has22([1, 2, 1]));
console.log(has22([2, 1, 2]));


function has22(nums) {

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 2 && nums[i++] === 2) {
            return true;
        }
    }
    return false;
};

console.log(has22([1, 2, 2]));
console.log(has22([1, 2, 1]));
console.log(has22([2, 1, 2]));