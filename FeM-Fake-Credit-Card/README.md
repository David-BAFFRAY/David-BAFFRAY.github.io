# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)
![](./screenshot-error.jpg)
![](./screenshot-validation.jpg)

### Links

- Solution URL: [Github](https://your-solution-url.com)
- Live Site URL: [David-BAFFRAY](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript
- Mobile-first workflow

### What I learned

This challenge allowed me to review the basics in javascript.

for example:

```js
cardNumber.addEventListener('keyup', function(e) {
    if(e.key != 'Backspace' && (cardNumber.value.length === 4 || cardNumber.value.length === 9 || cardNumber.value.length === 14)) {
        cardNumber.value += ' ';
    }
});
```

### Continued development

I want to continue to improve the use of javascript but also a bundler, such as parcelJs.

Improve my use of Sass and a javascript framework.

### Useful resources

- [Stackoverflow](https://stackoverflow.com/) - Stackoverflow helped me with the implementation and logic of an algorithm.

## Author

- Website - My website is under construction.
- Frontend Mentor - [@David-BAFFRAY](https://www.frontendmentor.io/profile/David-BAFFRAY)
- Twitter - [@Np_Ng67](https://twitter.com/Np_Ng67)
- Linkedin - [David BAFFRAY](https://www.linkedin.com/in/david-baffray-189b6422b/)