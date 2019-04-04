import './style.scss';
import controlHandler from '../SiteContent';
const searchButton = document.querySelector('.search__button') || false;

if (searchButton) {
  searchButton.addEventListener(
    'click',
    function(e) {
      controlHandler(e, this, 'search-form');
    },
    false
  );
}
