console.log("This is Module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
} 

//module.exports = average;
//As an object Exported-------------->>>>>
module.exports = {
    avg: average,
    name: "Siddhartha",
    repo: "Github"

}