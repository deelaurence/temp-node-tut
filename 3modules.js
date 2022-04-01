const names = require('./4names');
const sayHi = require('./5utilis')


const data = require('./6alternative-flavor')

require('./7mind-grenade')
console.log(data);
sayHi('susan')
sayHi(names.peter)
sayHi(names.john)

sayHi(data.singlePerson.name)