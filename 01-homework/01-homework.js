let price001 = 15.678;
let price002 = 123.965;
let price003 = 90.2345;
let maxPrice = Math.max(price001, price002, price003);
let minPrice = Math.min(price001, price002, price003);
let sumAllPrices = price001 + price002 + price003;
let roundPrices001 = Math.floor(price001);
let roundPrices002 = Math.floor(price002);
let roundPrices003 = Math.floor(price003);
let sumRoundPrices = roundPrices001 + roundPrices002 + roundPrices003;
let roundHundreds = Math.ceil(sumRoundPrices/100)*100;
let evenOddPrice = Math.floor(sumAllPrices) % 2 === 0 ? true : false;
let restSum = 500 - sumAllPrices;
let averagePrice = (sumAllPrices/3).toFixed(2);
let discount = Math.floor(Math.random()*100);
let sumDiscount = sumAllPrices.toFixed(2) - discount;
let cost = sumAllPrices.toFixed(2);
let profit = cost/2 - discount;



document.writeln(`
    <p><b>Price1: </b>${price001}</p>
    <p><b>Price2: </b>${price002}</p>
    <p><b>Price3: </b>${price003}</p>
    <p><b>Max Price: </b>${maxPrice}</p>
    <p><b>Min Price: </b>${minPrice}</p>
    <p><b>Sum of all Prices: </b>${sumAllPrices}</p>
    <p><b>Sum of Rounded Prices: </b>${sumRoundPrices}</p>
    <p><b>Rounded to hundreds: </b>${roundHundreds}</p>
    <p><b>Even or odd Price: </b>${evenOddPrice}</p>
    <p><b>The amount of the rest: </b>${restSum}</p>
    <p><b>The average price rounded to the second decimal place: </b>${averagePrice}</p>
    <p><b>Discount: </b>${discount}</p>
    <p><b>The sum with discount: </b>${sumDiscount}</p>
    <p><b>Profit with discount: </b>${profit}</p>
`);