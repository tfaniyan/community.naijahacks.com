/**
 * TODO: How to use fontawesome with react
 * 1. All fontawesome icons needed can be added here, then import this file
 * to component that need any of the icons to consume it.
 * 2. Check Pages/Community/community.tsx file for a sample.
 * 3. Visit https://fontawesome.com/icons to pick icons you need
 * 4. Follow https://scotch.io/tutorials/using-font-awesome-5-with-react#toc-using-icons-from-specific-packages 
 * to understand how to use fontawesome icons with react
 */

//import fontawesome library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';

library.add(
    faSearch,
    faCheckCircle,
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
  // more icons go here
);