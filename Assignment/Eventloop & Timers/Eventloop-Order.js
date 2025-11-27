console.log("Begin"); setTimeout(() => { console.log("Timeout Task"); }, 0); Promise.resolve().then(() => { console.log("Promise Task"); }); console.log("End");

// that Begin and End print immediately 
//and thn promise task print 
// there is a setTimout used that's why that msg Timeout Task it prints in last it goes in queue for few time
