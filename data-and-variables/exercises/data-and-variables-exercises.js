// Declare and assign the variables below

const shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
const milesPerKilometer = 0.621;


// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof 'Determination');
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof milesPerKilometer);


// Calculate a space mission below

let milesToMars = distanceToMarsKm * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars."); 
// Calculate a trip to the moon


let distancetoMoon = 384000
let milesToMoon = distancetoMoon* milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;





// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the MOON."); 