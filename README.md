Project Title

Website Performance Optimization portfolio project


Getting started

Part 1: Optimize PageSpeed Insights score for index.html
Part 2: Optimize Frames per Second in pizza.html


Prerequisities

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).


Built With

Atom
Bootstrap


Fixes & Updates

GRUNT:
 - Grunt has been applied to this project and can be found in the root level.
 - Images in img have been compressed (both from index.html and pizza.html).
 - Both perfmatters.js & main.js has been minimized.

CSS:
 - All css has been inlined.
 - Critical CSS has been separated in a different file (critical.css).

IMAGES:
 - Compressed all images to make them smaller and faster to load.

PIZZA JS:
 - Changed some querySelectors to the appropriate getElementsByClassName or getElementById.
 - Moved the items variable to the bottom of the JS file.

The function changeSliderLabel() has been optimized.
  - Before the code was not DRY; therefore, it was delaying the browser since repeated functions were taking place.
  - A variable was created outside the for loop, this way the result is grabbed once instead of every single time the loop goes through.
  - The switch statement has been optimized to render the desired output.
  - Added 2 variables to the for loop of changePizzaSizes().

The function updatePositions() has been optimized.
  - Variable items was moved outside the function.
  - Variable scroll was created outside the for loop so scrollTop is calculated before hand.
  - Number of calculated pizzas has been lowered from 200 to 12.
  - The getElementById has been moved outside the for loop, this way it's performed once and appended at the end of the loop.
  - Eliminated creation of variable elem.


Authors

Cesar L. Jaitman Labaton
