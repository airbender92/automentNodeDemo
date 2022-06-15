const shell = require('shelljs');
const readLineSync = require('readline-sync');
const path = require('path');
const fs = require('fs');
const { repository } = require('./config');

const { delivery, baseBranch } = repository;
const repoName = delivery.substring(delivery.lastIndexOf('/'));

const repoPath = path.join(__dirname, repoName);
const isExist = fs.existsSync(repoPath);
if (!isExist) {
  fs.mkdirSync(repoPath);
}
shell.cd(repoPath);

shell.exec(`git checkout ${baseBranch}`);

shell.exec(`git pull origin ${baseBranch}`);

const ticketId = readLineSync.question('what is the ticket ID?', {
  limit: input => input.trim().length > 0,
  limitMessage: 'Please enter a ticket ID'
});

shell.exec(`git checkout -b ${ticketId}`)