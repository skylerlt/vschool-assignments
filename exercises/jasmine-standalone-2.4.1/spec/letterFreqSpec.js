describe("Letter Frequency", function () {
    it("should return an object", function () {
        var freqObj = letterFrequency('a');
        expect(freqObj).toBeDefined();
    });

    it("should populate the keys with the letters", function () {
        var freqObj = letterFrequency('abc');
        expect(freqObj.hasOwnProperty("a")).toBe(true);
        expect(freqObj.hasOwnProperty("b")).toBe(true);
        expect(freqObj.hasOwnProperty("c")).toBe(true);
    });

    it("should set new keys to a count of 1", function () {
        var freqObj = letterFrequency('abc');
        expect(freqObj.a).toBe(1);
        expect(freqObj.b).toBe(1);
    })

    it("should increment existing keys", function () {
        var freqObj = letterFrequency('aaaabbc');
        expect(freqObj.a).toBe(4);
        expect(freqObj.b).toBe(2);
        expect(freqObj.c).toBe(1);
    })
});