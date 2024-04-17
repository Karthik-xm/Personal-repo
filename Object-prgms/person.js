const person = {
    Name: "Johny",
    Age: 40,
    Cars: [
        { 
            name: "ford",
            models: ["mustang", "Fiesta", "Mustang"]
        },
        { 
            name: "BMW",
            models: [320, "x3", "x5"]
        },
        { 
            name: "fiat",
            models: [500, "panda"]
        }
    ]
};

function outputProperties(obj) {
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            console.log(`${key}: \n-----------`);
            obj[key].forEach(item => {
                if (typeof item === 'object') {
                    outputProperties(item);
                } else {
                    console.log(item);
                }
            });
        } else if (typeof obj[key] === 'object') {
            console.log(`${key}:\n------------`);
            outputProperties(obj[key]);
        } else {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

outputProperties(person);
