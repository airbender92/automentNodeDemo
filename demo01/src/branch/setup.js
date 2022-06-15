require('colors');
const shell = require('shelljs');
const { repository } = require('./config');

const { delivery } = repository;

console.log(`Cloneing ${delivery}`.cyan);

shell.cd(__dirname);

shell.exec(`git clone ${delivery} --progress`);