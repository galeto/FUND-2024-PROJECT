/*Write a JS function that rounds numbers to a specific precision.
The input comes as two numbers. The first value is the number to be rounded and the second is the precision (significant decimal places). If the passed precision is more than 15, it should automatically be reduced to 15.
Remove trailing zeroes, if any (you can use parseFloat (number))
The output should be printed to the console. Do not print insignificant decimals.*/


function rounding(num, precition) {
    if (precition > 15) {
        precition = 15;
    }
    let fixNum = num.toFixed(precition);
    console.log(parseFloat(fixNum));
}
rounding(3.1415926535897932384626433832795, 18);