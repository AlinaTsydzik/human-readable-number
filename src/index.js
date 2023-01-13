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
  
    if ( number <= 10)
    {   
        return zeroToTen[number];
    }

    if (number > 10 && number < 20)
    {
        return elevenToNineteen[(number%10) - 1] ;
    }

    if (number >= 20 && number < 100 && number % 10 === 0 )
    {
        return twentyToNinety[number/10 - 2];
    }

    if (number > 20 && number < 100)
    {
        return twentyToNinety[Math.trunc(number/10) - 2] + ' ' + zeroToTen[number%10];
    }

    
}
