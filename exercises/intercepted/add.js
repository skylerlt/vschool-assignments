var addMonster = function (req, res, next) {
    if (req.method === "POST") {
        req.body.monster = {
            name: "Sully"
        };
    }
    next();
};

module.exports = addMonster;
