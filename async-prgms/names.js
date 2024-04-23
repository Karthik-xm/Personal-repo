const displayNames = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();
    const names = data.map(user => user.name);
    console.log("Names from api:");
    names.forEach(name => {
        console.log(`=> ${name}`);
    });
}

displayNames();