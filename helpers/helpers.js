var helpers;
(function (helpers) {
    function average(params) {
        var sum = 0;
        for (var i = 0; i < params.length; i++) {
            sum += params[i];
        }
        return sum / params.length;
    }
    helpers.average = average;
})(helpers || (helpers = {}));
