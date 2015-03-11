var tcsc;
(function (tcsc) {
    function binarySearch(array, target) {
        var min = 0;
        var max = array.length - 1;
        var guess;
        var guessValue;
        while (max >= min) {
            guess = helpers.roundedAverage([max, min]);
            guessValue = array[guess];
            if (guessValue === target) {
                return guess;
            }
            else if (guessValue > target) {
                max = guess - 1;
            }
            else if (guessValue < target) {
                min = guess + 1;
            }
        }
        return -1;
    }
    tcsc.binarySearch = binarySearch;
})(tcsc || (tcsc = {}));
