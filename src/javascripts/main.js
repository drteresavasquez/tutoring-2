// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';
import allTheThings from './sampleCode';

const init = () => {
  document.querySelector('#app').innerHTML = 'Up and running';
  console.warn('YOU ARE UP AND RUNNING!');

  allTheThings();
  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();
