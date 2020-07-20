
function printRepeatedNumbers() {
    let array = [0,1,2,3,4,5,6,7,7,8,9,10];
    let result = 0;
    let count = 0;
    for (let index = 0 ; index < array.length-1 ; index++){
        if(array[index] == array[index+1]) {
            console.log("Repeated numbers in the Array",array[index]);
        }
    }
}