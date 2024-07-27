

//         Friday	Saturday  Sunday
// Students  8.45	9.80	  10.46
// Business  10.90	15.60	  16
// Regular	   5	20	      22.50

function vacation(count, type, day) {

    let priceForPerson;
    

    switch (day) {
        case "Friday":
            if (type === "Students") {
                priceForPerson = 8.45;
            } else if (type === "Business") {
                priceForPerson = 10.90;
            } else if (type === "Regular") {
                priceForPerson = 15;
            }
            break;
        case "Saturday":

            if (type === "Students") {
                priceForPerson = 9.8;
            } else if (type === "Business") {
                priceForPerson = 15.60;
            } else if (type === "Regular") {
                priceForPerson = 20;
            }
            break;
        case "Sunday":
            if (type === "Students") {
                priceForPerson = 10.46;
            } else if (type === "Business") {
                priceForPerson = 16;
            } else if (type === "Regular") {
                priceForPerson = 22.50;
            }
            break;
    }

   let totalPrice = count * priceForPerson;
    

    if(type === "Students" && count >= 30){
        totalPrice *= 0.85;
    } else if(type === "Business" && count >= 100){
        totalPrice -= 10 * priceForPerson;
    }else if(type === "Regular" && (count >= 10 && count <= 20)){
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

//vacation("30", "Students", "Sunday");
vacation("40", "Regular","Saturday");