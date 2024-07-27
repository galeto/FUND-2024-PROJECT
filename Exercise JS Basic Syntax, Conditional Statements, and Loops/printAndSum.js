 //Write a function that displays numbers from given start to given end and their sum. The input comes as two number parameters. Print the result like the examples below:


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