var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// for (var i in companySalesData) {
//   var companyprovinceSales = companySalesData[i].sales.reduce(function(a, b) {
//   return a + b;}, 0);
//   var companyprovinceSalesWithTax = companyprovinceSales * salesTaxRates[i]
//  // companyprovinceSalesWithTax * salesTaxRates[i]
// console.log(companyprovinceSalesWithTax)
// }




function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
 var output = {};
  for (var i in companySalesData) {
   // var temp = {};
   // output[companySalesData[i].name] = salescalculator(companySalesData[i].sales);
   // if (output.hasOwnproperty(companySalesData[i].name)) {
     // ouput[companySalesData[i].name]
  //  }
    if (output[companySalesData[i].name] === undefined) {
    output[companySalesData[i].name] = {totalSales:0, totalTaxes:0};
    }
    output[companySalesData[i].name].totalSales += salescalculator(companySalesData[i].sales);
 // }
  //for (var i in companySalesData) {
    output[companySalesData[i].name].totalTaxes += taxcalculator(salescalculator(companySalesData[i].sales), companySalesData[i].province)
}

    //   output.companySalesData[i].name = 0}

console.log (output)
}

function salescalculator(salesData) {
  var salesTotal = salesData.reduce(function(a, b) {return a + b;}, 0);
  return salesTotal
}

function taxcalculator(totalSalesData, province) {
  return totalSalesData * salesTaxRates[province]
}

//function taxcalculator(salesData)

//     === undefined) {
//       companySalesData[i].name[companyname].name = 0
//    }
// }

var results = calculateSalesTax(companySalesData, salesTaxRates);










/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/