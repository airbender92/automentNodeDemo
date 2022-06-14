const querystring = require('querystring');

const url = 'http://www.opencanvas.co.uk?myName=Shaun&myAge=28&comment=Yes+I+am+getting+old';

const parseUrl = querystring.parse(url.substring(url.indexOf('?') + 1));

console.log(parseUrl)
console.log(`Hi my name is ${parseUrl.myName}`);
console.log(`I am ${parseUrl.myAge}`)
