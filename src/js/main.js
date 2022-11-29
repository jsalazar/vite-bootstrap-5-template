// Import our custom CSS
// Note: you can import this here or as a stylesheet link within index.html
// import '../scss/styles.scss'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

// individual components...
// import Alert from 'bootstrap/js/dist/alert';

// multiple components... 
// import { Tooltip, Toast, Popover } from 'bootstrap';


// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })