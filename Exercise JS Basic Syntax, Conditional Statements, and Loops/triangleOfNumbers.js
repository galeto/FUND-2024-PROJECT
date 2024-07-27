function triangleOfNumbers (maxNum){

    for(let curRow = 1; curRow <= maxNum; curRow ++){
        
        console.log(`${curRow} `.repeat(curRow));
    }
}
triangleOfNumbers(3)