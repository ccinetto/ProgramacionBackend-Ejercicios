const moment = require('moment');

const formatMessages = (data) => {
  const { username, text } = data;
  return {
    username,
    text,
    time: moment().format('h:mm a'),
  };
};

module.exports = {
  formatMessages,
};
