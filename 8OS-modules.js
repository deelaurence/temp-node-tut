const os = require('os');

//info about current user
const user =os.userInfo()

console.log(user)


// setInterval(() => {
    
const upTime = os.uptime()
const upMin = `${Math.floor(upTime/60)} minutes, ${upTime%60} seconds`
const upHour = `${Math.floor(upTime/3600)} hours, ${Math.floor(upTime%3600/60)} minutes ${upTime%3600%60} seconds` 
const upDay = `${Math.floor(upTime/86400)} days, ${Math.floor(upTime%86400/3600)} hours ${Math.floor(upTime%86400%3600/60)} minutes, ${Math.floor(upTime%86400%3600%60)} seconds`
// console.log(`this system has been running for ${upTime} seconds`)
    console.log(`this system has been running for ${upDay} `)
// }, 100000); 

const currentOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freeMem: os.freemem(),
   
   
    uptime:upDay
}

console.log(currentOS);