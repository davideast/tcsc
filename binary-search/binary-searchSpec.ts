/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path='./binary-search.ts'/>

describe('A binary-search', () => {

  describe('on a small array', () => {
      it('should find the index when the target is greater than the guess', () => {
        var arrayOfSix = [2, 3, 5, 7, 11, 13, 17];
        var indexOfTarget = tcsc.binarySearch(arrayOfSix, 13);
        expect(indexOfTarget).toEqual(5);
        expect(indexOfTarget).toEqual(arrayOfSix.indexOf(13));
      });

      it('should find the index when the target is less than the guess', () => {
        var arrayOfSix = [2, 3, 5, 7, 11, 13, 17];
        //debugger;
        var indexOfTarget = tcsc.binarySearch(arrayOfSix, 3);
        expect(indexOfTarget).toEqual(1);
        expect(indexOfTarget).toEqual(arrayOfSix.indexOf(3));
      });

      it('should find the index of an array of ten', () => {
        var arrayOfTen = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
        var indexOfTarget = tcsc.binarySearch(arrayOfTen, 31);
        var indexOfNative = arrayOfTen.indexOf(31)
        expect(indexOfTarget).toEqual(indexOfNative);
      });
  });

  describe('on a big array', () => {
    var bigArray : Array<number>;

    beforeEach(() => {
          bigArray =
          [1 ,2 ,3 ,4, 5,7,13,15,16,17,18,19,20,21,22,23,24,25,26,30,31,32,33,35,36,39,40,43,44,45,47,48,49,55,58,59,61,63,65,69,73,77,78,79,80,82,83,84,86,87,88,89,90,91,93,94,95,96,97,100,101,102,103,104,107,109,112,113,114,115,116,117,118,119,121,122,123,124,126,127,130,131,132,133,134,135,136,137,138,139,140,142,144,145,146,147,148,149,150,151,152,155,156,158,159,160,161,162,165,166,170,171,172,173,174,177,179,180,181,184,185,186,188,189,190,191,194,196,197,198,199,200,201,202,203,204,208,209,210,211,212,214,216,217,218,219,220,222,223,225,226,227,228,229,231,232,234,235,236,238,239,240,242,243,244,245,246,247,249,252,253,256,259,261,262,263,266,268,269,270,271,272,273,275,277,278,279,280,281,282,283,287,288,289,292,293,295,296,297,298, 303,308,310,311,312,315,316,317,322,323,327,328,329,334,335,336,337,342,346,347];
    });

    it('should find the index when the target is greater than the guess', () => {
      var indexOfTarget = tcsc.binarySearch(bigArray, 329);
      var indexOfNative = bigArray.indexOf(329);
      expect(indexOfTarget).toEqual(indexOfNative);
    });

    it('should find the index when the target is less than the guess', () => {
      var indexOfTarget = tcsc.binarySearch(bigArray, 22);
      var indexOfNative = bigArray.indexOf(22);
      expect(indexOfTarget).toEqual(indexOfNative);
    });

  });

});
