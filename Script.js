
let xhr = new XMLHttpRequest();
console.log(xhr); //object
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);

//filter method- get all countries from Asia
const asiaCountryArray = data.filter((value,index, accArr) => { 
    return data[index].continents[0]==="Asia"
});
console.log(asiaCountryArray);

//filter method- get population of less than 2 lakhs country
const populationArray = data.filter((value,index) => { 
    return data[index].population <200000
});
console.log(populationArray);

//forEach method- Print Name,Capital and flag
const nameArray = data.forEach((value,index) => {
    console.log(
        `Name : ${data[index].name.common} 
    Capital : ${data[index].capital}
    Flag : ${data[index].flag}` 
    );
    
});


//reduce function - Print total population of countries
const totalPopulationArr = data.reduce((acc,value,index) => {
    return(acc += data[index].population)
},0);
console.log(totalPopulationArr);

//print the country that print US dollar as currency
const usDollarCurrencyArr = data.filter((value,index) => { 
    return data[index].currencies ==="USD"
});
console.log(usDollarCurrencyArr);
};

