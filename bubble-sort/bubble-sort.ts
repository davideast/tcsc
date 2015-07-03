
module tcsc {

  export function bubbleSort(unsorted: [number]): [number] {

    // how many passes? (n - 1)
    // how many passes left? passesDoneSoFar - passesLeft
    // for (i=0; i< n-1;i++) { for(j=0; j < passesDoneSoFar; j++) {} }

    var passesDoneSoFar = unsorted.length - 1;

    for(var i=0; i < passesDoneSoFar; i++) {

      var passesLeft = passesDoneSoFar - i;

      for(var leftIndex=0; leftIndex < passesLeft; leftIndex++) {

        var rightIndex = leftIndex + 1;
        var leftItem = unsorted[leftIndex];
        var rightItem = unsorted[rightIndex];

        if (leftItem > rightItem) {
          // swap
          unsorted[leftIndex] = rightItem;
          unsorted[rightIndex] = leftItem;
        }

      }

    }
    
    return unsorted;
  }

}
