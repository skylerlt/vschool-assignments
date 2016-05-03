var shopper = {
    name: 'Harry Houdini'
    , items: 15
    , storeMember: true
    , laneFunction: function expressPossible() {
        if (shopper.items <= 15) {
            return shopper.name + "may use the express lane."
        } else {
            return shopper.name + "may NOT use the express lane!"
        }
    }
};

console.log(shopper.laneFunction);