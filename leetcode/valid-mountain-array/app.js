let arr = [0, 1, 2, 2, 1, 0];

var validMountainArray = function (arr) {

    // check to see if array can have peak
    if (arr.length < 3) {
        return false
    }

    // find peak
    let mountainTop = Math.max(...arr)

    // index of peak
    const peakIndex = arr.indexOf(mountainTop);

    // if the peak is at the beginning or end of array
    // return false
    if (peakIndex === 0 || peakIndex === arr.length - 1) {
        return false
    }

    // up the mountain
    for (let i = 0; i < peakIndex - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false
        }
    }

    // down the mountain
    for (let i = peakIndex; i < arr.length; i++) {
        if (arr[i] <= arr[i + 1]) {
            return false;
        }
    }

    return true;

};

validMountainArray(arr);