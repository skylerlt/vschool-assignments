describe("Party Constructor", function () {
    it("should set the population correctly", function () {
        var party = new Party("example");
        expect(party.name).tobe("example");
    })
})