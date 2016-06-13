var uuid = require("uuid");
var bounties = [
    {
        "firstName": "Luke",
        "lastName": "Skywalker",
        "living": true,
        "bountyAmount": 150000,
        "type": "Jedi",
        "id": uuid.v4()
    }
];

module.exports = bounties;
