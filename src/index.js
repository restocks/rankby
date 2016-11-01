const _ = require('lodash');

module.exports = (array, key) => {
  // sort the array
  const orderedArray = _.orderBy(array, [key], ['desc']);

  let rank = 1;
  const arrayWithRanking = [];

  _.each(orderedArray, (current, index) => {
    // check for ties
    const previous = orderedArray[index - 1];
    const item = current;

    if (typeof previous !== 'undefined' && previous[key] === current[key]) {
      item.rank = previous.rank;
    } else {
      item.rank = rank;
    }
    rank += 1;

    arrayWithRanking.push(item);
  });
  return arrayWithRanking;
};
