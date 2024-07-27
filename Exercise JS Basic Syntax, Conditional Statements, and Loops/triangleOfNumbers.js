/* Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
Constraints
n will be in the interval [1...20].
*/


function triangleOfNumbers (maxNum){

    for(let curRow = 1; curRow <= maxNum; curRow ++){
        
        console.log(`${curRow} `.repeat(curRow));
    }
}
triangleOfNumbers(3)