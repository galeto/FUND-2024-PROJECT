    function printAndSum (start, end){
    let sum = 0;
    let buff = '';

    for(let curNum = start; curNum <= end; curNum ++){
        buff += curNum + " ";
        sum +=curNum;      
    }
    console.log(buff);
    console.log(`Sum: ${sum}`);

} 
printAndSum(5, 10);