import './style.scss';

// Sroll Positon
let yScroll;

const siteContentControls = document.querySelectorAll('.site-content-control');
const siteContent = document.querySelector('.site-content');

// Change data-type on main content element (work with css)
const siteContentHandler = contentType => {
  if (!contentType) {
    siteContent.setAttribute('data-type', 'content');
  } else {
    siteContent.setAttribute('data-type', contentType);
  }
};

export default (e, elem, type) => {
  e.preventDefault();

  // Get right traget for click event
  const button = elem;

  if (button.getAttribute('data-state') === 'open') {
    button.setAttribute('data-state', 'close');

    // Set default data-type for site content
    siteContentHandler();

    // Recovery scroll position
    if (yScroll > 0) {
      window.scroll(0, yScroll);
    }
  } else {
    // Save content sroll position
    if (siteContent.getAttribute('data-type') === 'content') {
      yScroll = window.pageYOffset;
    } else {
      yScroll = window.pageYOffset > 0 ? window.pageYOffset : yScroll;
    }

    window.scroll(0, 0);

    // Close all content controls
    if (siteContentControls.length > 0) {
      siteContentControls.forEach(contol => {
        contol.setAttribute('data-state', 'close');
      });
    }
    button.setAttribute('data-state', 'open');

    // Set data-type for site content
    siteContentHandler(type);
  }
};
