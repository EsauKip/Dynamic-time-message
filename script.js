//get the current date and time
const date = new Date();
// grt the hour from the date
const hour = date.getHours();
// select button from the DOM element
const button = document.querySelector('button');
// select the  message area from the dom element
const message = document.querySelector('#message');
//add click event to the button
button.addEventListener('click', function() {
    