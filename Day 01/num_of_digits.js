function num_of_digits(num) {
    if (num === 0) {
        return 1;
    }
    num = Math.abs(num);

    let numCount = 0;
    while (num !== 0) {
        console.log(num);
        num = Math.floor(num / 10);


        numCount++;
        console.log("Num count " + numCount);
    }
    return "final "+numCount;
}
console.log(num_of_digits(327));
