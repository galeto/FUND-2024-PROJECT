function sumString (input){

    let name = '12345';
    let sum =0;
    
    for(let index = 0; index < name.length; index ++){
        let currentNumber = Number(name[index]);
        sum += currentNumber;
       
    }
    console.log(sum);
}
sumString('12345');