let lineHistory = [];

const getLineHistory = () => lineHistory;

const addNewLine = (newLine) => {
  lineHistory.push(newLine);
};

const resetHistory = () => {
  lineHistory = [];
};

module.exports = {
  getLineHistory,
  addNewLine,
  resetHistory,
};
