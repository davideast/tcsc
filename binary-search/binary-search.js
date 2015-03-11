var helpers = require('./../helpers/helpers');
function binarySearch(array, target) {
    var min = 0;
    var max = array.length;
    var guess;
    while (max > min) {
        guess = helpers.average([max, min]);
    }
    return -1;
}
exports.binarySearch = binarySearch;
