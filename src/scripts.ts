import axios from 'axios';

// For editing JSON file required for metroui
const toEditJSON = () => {
  const countriesFiltered: ((string | number)[])[] = [];
  // const html:HTMLDivElement = document.querySelector(".arr");
  const filterCountry = (apiResponse:any) => {
    let id = 1;
    for (const country of apiResponse) {
      let countryArr: (string | number)[] = [];
      countryArr.push(id);
      countryArr.push(country.name);
      countryArr.push(country.capital);
      countryArr.push(country.currency.name);
      countryArr.push(country.language.name);
      countriesFiltered.push(countryArr);
      // html.innerText += JSON.stringify(countryArr) + ",\n";
      id += 1;
      countryArr = [];
    }
  };

  const api = 'http://localhost:3004/countries';

  axios.get(api)
    .then((response) => filterCountry(response.data))
    .catch((error) => {
      console.log(error);
    });
};
