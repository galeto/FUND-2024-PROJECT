function firstDemo() {
    let name = 'Ivan';
    let number = 5.34;
    let currency = 'BGN';
    

    console.log(typeof name);
    console.log(`Your name is: ${name + ':)'}`);
    console.log(`${number.toFixed(4)}`);

    switch (currency) {
        case 'USD': console.log('dollars'); break;
        case 'BGN': console.log('leva'); break;
    }

    for (let i = 0; i <= 10; i++) {

        if (i === 7) {
            continue;

        }
        console.log(i);
    }

    let num = 1;
    while (num <= 10) {
        console.log(num);
        if (num === 7) {
            break;
        }
        num++;
    }


    console.log("---------------");
    let num1 = 0;
    
    while (num1 <=10) {
        num1++;
        console.log(num1);
        if (num1 === 7) {
            continue;
        }


    }
}
firstDemo();
