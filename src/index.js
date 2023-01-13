module.exports = function toReadable (number) {
    let zeroToTen  = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten'
    ] ;

    let elevenToNineteen = [
        'eleven',
        'twelve', 
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];

    let twentyToNinety = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];
    // 0 to 10
    if ( number <= 10)
    {   
        return zeroToTen[number];
    }

    // 11 to 19
    if (number > 10 && number < 20)
    {
        return elevenToNineteen[(number%10) - 1] ;
    }

    // 20-30-40-50-60-70-80-90  
    if (number >= 20 && number < 100 && number % 10 === 0 )
    {
        return twentyToNinety[number/10 - 2];
    }

    // 21 to 99
    if (number > 20 && number < 100)
    {
        return twentyToNinety[Math.trunc(number/10) - 2] + ' ' + zeroToTen[number%10];
    }

    // 100-200-300 ... 900
    if (number >= 100 && number < 1000 && number%100 === 0)
    {
        return zeroToTen[number/100] + ' ' +'hundred';
    }

    // 101 ... 110   201 ... 210   901..910
    if (number > 100 && number < 1000 && ((number%100) > 0) && ((number%100) <= 10)) 
    {
       
        return zeroToTen[Math.trunc(number/100)] + ' ' +'hundred' + ' ' + zeroToTen[number%100];
    }

    // 111...119    211...219    911...919
    if (number > 100 && number < 1000 && number%100 > 10 && number%100 < 20) 
    {
        return zeroToTen[Math.trunc(number/100)]  + ' ' +'hundred' + ' ' + elevenToNineteen[(number%100)%10 - 1];
    }

    // 120 130 140 ...  990   
    if (number > 100 && number < 1000 && number%100 >= 20 && number%10 === 0) 
    {
        return zeroToTen[Math.trunc(number/100)]  + ' ' +'hundred' + ' ' + twentyToNinety[(number%100)/10 - 2];
    }

    // all
    if (number > 100 && number < 1000 && number%100 > 20 && number%10 !== 0)
    {
        return zeroToTen[Math.trunc(number/100)]  + ' ' +'hundred' + ' ' + twentyToNinety[Math.trunc((number%100)/10) - 2] + ' ' + zeroToTen[(number%100)%10];
    }
}
