const jiraData = require('../data/mock-jira-data.json');

const fetchDataFromJira = ticketNumber => jiraData[ticketNumber];

module.exports = fetchDataFromJira;