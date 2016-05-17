describe("Cipher", function () {
    it("should shift letters upward in the alphabet", function () {
        var shiftedString = shiftLetters("a", 1);
        expect(shiftedString).toBe("b");
    });

    it("should shift from z back down to a", function () {
        var zShift = shiftLetters("z", 1);
        expect(zShift).toBe("a");
    });

    it("should be able to shift more than 26 characters", function () {
        var shift = shiftLetters("g", 27);
        expect(shift).toBe("h");
    });

    it("should work with multiple characters in the string", function () {
        var shiftPhrase = shiftLetters("hello", 1);
        expect(shiftPhrase).toBe("ifmmp");
    });

    it("should ignore spaces and punctuation", function () {
        var spaceString = "h3ll0 w0rld!";
        var shifted = shiftLetters(spaceString, 1);
        expect(shifted).toBe("i3mm0 x0sme!");
    })
});