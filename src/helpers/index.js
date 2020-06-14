
const helpers = {
  generateTempId: function () {
    let prefix = 'temp';
    let random = Math.random().toString(36).substr(2, 9);
    let date = Date.now();

    return [
      prefix,
      random,
      date
    ].join('_');
  }
};

export default helpers;
