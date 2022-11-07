import './css/styles.css';
import { infoAboutCountry, markupCountries } from './js/markup';
import { fetchCountries } from './js/fetchCountries';
import { debounce } from 'lodash';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchCountry = document.querySelector('#search-box');

const countryList = document.querySelector('.country-list');

const countryInfo = document.querySelector('.country-info');

searchCountry.addEventListener(
  'input',
  debounce(createNewQuery, DEBOUNCE_DELAY)
);

function createNewQuery(event) {
  const value = event.target.value.trim();

  if (!value) {
    return;
  }
  clearCountryBox();

  fetchCountries(value)
    .then(name => {
      if (name.length === 1) {
        countryInfo.innerHTML = infoAboutCountry(name);
        return;
      }

      if (name.length > 1 && name.length <= 10) {
        countryList.innerHTML = markupCountries(name);
        return;
      }

      if (name.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(err => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

function clearCountryBox() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}
