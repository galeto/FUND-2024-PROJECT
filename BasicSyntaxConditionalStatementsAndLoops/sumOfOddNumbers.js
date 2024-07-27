function sumOfOddNumbers (number){

    let ourNumber = number;
    let sum = 0;
    let countNumber = 0;
    let currentValue = 1;

    while(countNumber !== ourNumber){
        
        if(currentValue % 2 !== 0){
            console.log(currentValue);
            countNumber ++;
            sum += currentValue;
        }
        currentValue++;
    }
    console.log(`Sum: ${sum}`);

}
sumOfOddNumbers(5);