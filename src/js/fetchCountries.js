const urlAddress = 'https://restcountries.com/v2/name/';

// https://restcountries.com/v2/all?fields=name,capital,currencies

export const fetchCountries = parameter => {
  return fetch(
    `${urlAddress}${parameter}?fields=name,capital,flags,population,languages`
  ).then(data => {
    if (!data.ok) {
      throw new Error(data.statusText);
    }
    return data.json();
  });
};
