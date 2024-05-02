// Run this sample code as-is and examine the output. 
// Should the shuttle have launched? 
// Did it?
// Do not worry about fixing the code yet, we will do that in the next series of exercises.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}

///

let engineIndicatorLight = " NOT red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let fuelLevel = 21000;
let engineTemperature = 1200;
////

if (engineIndicatorLight === "green") {
    console.log("engines have started");
 } else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
 } else {
    console.log("engines are off");
 }
///

 if (crewStatus) {
    console.log("Crew Ready");
  } else {
    console.log("Crew Not Ready");
  }

///

if (computerStatusCode === 200) 
{console.log("Please stand by Computer is rebooting.");
 } else if (computerStatusCode ==="400" ) {
    console.log("Success! Computer online.");} else { 
    console.log("ALERT: Computer offline!");}
    ////

    if (shuttleSpeed > 17500) {
        console.log("ALERT: Escape velocity reached!");
      } else if (shuttleSpeed < 8000) {
        console.log("ALERT: Cannot maintain orbit!");
      } else {
        console.log("Stable speed.");
      }

      ////

      if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
        console.log("all systems go");
     } else {
        console.log("WARNING. Not ready");
     }
     // they print the same message //

     if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
        console.log("WARNING. Not ready");
     } else {
        console.log("all systems go");
     }

     if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
        console.log("ENGINE FAILURE IMMINENT!");
      } else if (fuelLevel <= 5000 || engineTemperature > 2500){
        console.log("Check fuel level. Engines running hot.");
      }

      let commandOverride = true 

      if (fuelLevel < 20000 || engineTemperature > 1200 || engineIndicatorLight === " NOT red blinking" || commandOverride == true){
        console.log("Cleared to Launch!");
      } else if (fuelLevel <= 20000 || engineTemperature > 1200){
        console.log("Launch Scrubbed!");
      }
//