const querystring = require('querystring');

const apiHost = 'https://jira.my-company.com/res/api/latest/search?jpl=';

const jplParams = {
  assignee: 'shaun.stone',
  startAt: 2,
  maxResults: 2
};

const apiUrl = `${apiHost}"${querystring.stringify(jplParams)}"`;

console.log(`My JQL api call is: ${apiUrl}`);