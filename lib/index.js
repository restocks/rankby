'use strict';

var _ = require('lodash');

module.exports = function (array, key) {
  // sort the array
  var orderedArray = _.orderBy(array, [key], ['desc']);

  var rank = 1;
  var arrayWithRanking = [];

  _.each(orderedArray, function (current, index) {
    // check for ties
    var previous = orderedArray[index - 1];
    var item = current;

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