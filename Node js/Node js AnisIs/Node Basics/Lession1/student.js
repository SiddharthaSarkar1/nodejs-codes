const getName = () => {
    return "Siddhartha Sarkar";
}

// exports.getName = () => {
//     return "Siddhartha Sarkar";
// }

const getAge = () => {
    return "26";
}

const cgpa = 8.9;


// exports.getName = getName;
// exports.getAge = getAge;
// exports.result = cgpa;

module.exports = {
    getName,
    getAge,
    cgpa
}