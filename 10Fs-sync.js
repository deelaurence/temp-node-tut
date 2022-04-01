const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(`${first}, and also ${second}`);


writeFileSync('./content/result.txt', second+' '+first)