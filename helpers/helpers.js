var helpers;
(function (helpers) {
    function average(params) {
        var sum = 0;
        if (!Array.isArray(params)) {
            throw new Error("Parameter must be an array.");
        }
        sum = params.reduce(function (a, b) { return a + b; });
        return sum / params.length;
    }
    helpers.average = average;
    function roundedAverage(params) {
        return Math.round(average(params));
    }
    helpers.roundedAverage = roundedAverage;
})(helpers || (helpers = {}));
