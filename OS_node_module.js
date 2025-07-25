const os = require("os");

console.log("System Platform", os.platform());

console.log("System architecture", os.arch());

console.log("Free Memory", os.freemem());

console.log("Total Memory",os.totalmem());

console.log("CPU info",os.cpus());

console.log("Computer name",os.hostname());

console.log("System on info",os.uptime());

console.log("Current user info",os.userInfo());

