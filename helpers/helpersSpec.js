describe('helpers', function () {
    describe('#average', function () {
        it("can average from one number", function () {
            var array = [1];
            var avg = helpers.average(array);
            expect(avg).toEqual(avg);
            expect(avg).toEqual(1);
        });
        it("can average from two numbers", function () {
            var array = [2, 4];
            var avg = helpers.average(array);
            expect(avg).toEqual(3);
        });
        it("can average from multiple even numbers", function () {
            var array = [2, 4, 6];
            var avg = helpers.average(array);
            expect(avg).toEqual(4);
        });
        it("can average from multiple odd numbers", function () {
            var array = [7, 3, 1];
            var avg = helpers.average(array);
            expect(avg).toEqual(array.reduce(function (a, b) { return a + b; }) / array.length);
        });
        it("will throw if param is not an array", function () {
            var nonArray = 1;
            try {
                var avg = helpers.average(nonArray);
            }
            catch (ex) {
                expect(ex.message).toEqual("Parameter must be an array.");
            }
        });
    });
    describe('#roundedAverage', function () {
        it('can round a decimal', function () {
        });
    });
});
