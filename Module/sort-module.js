
const sortAscending = (arr) => {
    return arr.slice().sort((a, b) => a - b);
}
const sortDescending = (arr) => {
    return arr.slice().sort((a, b) => b - a);
}
module.exports = { sortAscending, sortDescending };
