function markupCountries(data) {
  return data
    .map(({ flags, name }) => {
      return `<li class="list__item countryatr">
       <img class="icon" width=120 src=${flags.svg} alt="dots icon"> <p class="country-name">${name}</p> </li>`;
    })
    .join(' ');
}

function infoAboutCountry(data) {
  return data.map(({ flags, capital, population, name, languages }) => {
    console.log(languages);
    return `<ul class="list">
    <li class="countryatr">
    <img class="icon" width=120 src=${
      flags.svg
    } alt="dots icon"><p class="country-name">${name}</p>
    </li>
   
    <p><span class="listhaeder">Capital: </span>${capital}</p>
    <p><span class="listhaeder">Population: </span>${population}</p>
    <p><span class="listhaeder">Languages: </span>${languages
      .map(el => {
        return el.name;
      })
      .join(', ')}</p>
     </ul>`;
  });
}

export { markupCountries, infoAboutCountry };
