const log = require('./helpers/log');
const {
  ERROR,
  SUCCESS,
  WARNING
} = require('./constants/message-types')
 
log('This is a success message', SUCCESS);
log('This is a warning message', WARNING);