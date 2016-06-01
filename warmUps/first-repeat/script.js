function noRepeat(string) {
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) !== string.charAt(i + 1)) {
            if (i === 0) {
                return string[0];
            } else {
                return string[i + 1];
            }
        }
    }
};

console.log(noRepeat("ggggggggxkljfvlsjkfg"));
console.log(noRepeat("gxkljfvlsjkfg"));