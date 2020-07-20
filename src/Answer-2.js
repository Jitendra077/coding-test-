

function printMaxConsecutiveOnes() {
    let arr = [0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0];
    let result = 0;
    let count = 0;
    for(let index = 0 ;index <Array.length;index++) {
        if(array[index] == 0) {
            count = 0;
        }else {
            count++;
            if(result < count) {
                result = count;
            }
        }
    }
    console.log("Max Consecutive 1's in Array", result);
}