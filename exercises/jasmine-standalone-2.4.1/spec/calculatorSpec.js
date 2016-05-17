describe("Calculator", function () {

    it("should add two numbers together", function () {
        var sum = add(1, 2);
        expect(sum).toBe(3);

    });

    it("should subtract two numbers", function () {
        var difference = subtract(4, 3);
        expect(difference).toBe(1);
    })

    it("should multiply two numbers", function () {
        var product = multiply(2, 4);
        expect(product).toBe(8);
    })

    it("should divide two numbers", function () {
        var quotient = divide(10, 2);
        expect(quotient).tobe(5);
    })

    it("should return 0 when dividing by 0", function () {
        var quotient = divide(10, 0);
        expect(quotient).toBe(0);
    })

})