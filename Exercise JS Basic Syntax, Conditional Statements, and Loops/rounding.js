function rounding(num, precition) {
    if (precition > 15) {
        precition = 15;
    }
    let fixNum = num.toFixed(precition);
    console.log(parseFloat(fixNum));
}
rounding(3.1415926535897932384626433832795, 18);