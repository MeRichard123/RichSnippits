# Javascript
General useful bits of JavaScript

## Generate a random number with bounds
```javascript
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```