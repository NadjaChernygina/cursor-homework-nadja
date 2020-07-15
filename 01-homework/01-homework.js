let price001 = 15.678,
	price002 = 123.965,
	price003 = 90.2345,
	maxPrice,
	minPrice,
	sumAllPrices,
	roundPrices001,
	roundPrices002,
	roundPrices003,
	SumRoundPrices,
	evenOddPrice,
	restSum,
	averagePrice,
	discount,
	sumDiscount,
	profit,
	cost;




maxPrice = Math.max(price001, price002, price003);
minPrice = Math.min(price001, price002, price003);
sumAllPrices = price001 + price002 + price003;
roundPrices001 = Math.floor(price001);
roundPrices002 = Math.floor(price002);
roundPrices003 = Math.floor(price003);
SumRoundPrices = roundPrices001 + roundPrices002 + roundPrices003;
roundHundreds = Math.ceil(SumRoundPrices/100)*100;
evenOddPrice = Math.floor(sumAllPrices) % 2 === 0 ? true : false;
restSum = 500 - sumAllPrices;
averagePrice = (sumAllPrices/3).toFixed(2);
discount = Math.floor(Math.random()*100);
sumDiscount = sumAllPrices.toFixed(2) - discount;
cost = sumAllPrices.toFixed(2);
profit = cost/2 - discount;



document.writeln('<b>Price1: </b>' + price001 + '</br>');
document.writeln('<b>Price2: </b>' + price002 + '</br>');
document.writeln('<b>Price3: </b>' + price003 + '</br>');
document.writeln('</br>' + '</br>');
document.writeln('<b>Max Price: </b>' + maxPrice + '</br>');
document.writeln('<b>Min Price: </b>' + minPrice + '</br>');
document.writeln('<b>Sum of all Prices: </b>' + sumAllPrices + '</br>');
document.writeln('<b>Sum of Rounded Prices: </b>' + SumRoundPrices + '</br>');
document.writeln('<b>Rounded to hundreds: </b>' + roundHundreds + '</br>');
document.writeln('<b>Even or odd Price: </b>' + evenOddPrice + '</br>');
document.writeln('<b>The amount of the rest: </b>' + restSum + '</br>');
document.writeln('<b>The average price rounded to the second decimal place: </b>' + averagePrice + '</br>');
document.writeln('<b>Discount: </b>' + discount + '</br>');
document.writeln('<b>The sum with discount: </b>' + sumDiscount + '</br>');
document.writeln('<b>Profit with discount: </b>' + profit + '</br>');