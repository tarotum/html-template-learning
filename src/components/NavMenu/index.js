import './style.scss';
import controlHandler from '../SiteContent';
const navButton = document.querySelector('.nav-menu__button') || false;

if (navButton) {
  navButton.addEventListener(
    'click',
    function(e) {
      controlHandler(e, this, 'nav-list');
    },
    false
  );
}
