var exerciser = {
    name: "Skyler",
    age: 31,
    weight: 220,
    workOutDaily: true,
    goal: "lose weight",
    food: function () {
        console.log('Depends on the time of day...');
    },
    favoriteWorkOuts: [
        {
            workOutName: "P90X3",
            trainer: "Tony Horton",
            duration: 30
        },
        {
            workOutName: "freeWeights",
            trainer: "none",
            duration: 45
        },
        {
            workOutName: "sprints",
            trainer: "none",
            duration: 25
        }
    ],
    workOutBuddies: [
        {
            name: "Amanda",
            age: 30,
            weight: 205,
            workOutDaily: false,
            goal: "lose weight",
            favoriteWorkOuts: [
                {
                    workOutName: "Yoga",
                    trainer: "Tony Horton",
                    duration: 105
                },
                {
                    workOutName: "Jog",
                    trainer: "none",
                    duration: 60
                },
            ],
            workOutBuddies: [
                {
                    name: "Lillian",
                    age: 6,
                    weight: 45,
                    goal: "grow up"
                }
            ]
        }
    ]
};

//console.log(exerciser.food);
//exerciser.food();

//exerciser.getsTired = "evenings";
//exerciser.workOutBuddies.getsTired = "before the sun comes up";
//console.log(exerciser.workOutBuddies);

exerciser.workOutBuddies.push("Lillian", "Clara");
console.log(exerciser.workOutBuddies);