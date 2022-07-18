//get the current date and time
const date = new Date();
// grt the hour from the date
const hour = date.getHours();
// select button from the DOM element
const button = document.querySelector('button');
// select the  message area from the dom element
const messageArea = document.querySelector('#message');
//add click event to the button
button.addEventListener('click', function() {
    // check the hour of the day if its noon ,evening or morning
    if (hour>17){
        messageArea.innerHTML =`<h1>Good Evening</h1>`;
    }
    else if (hour>12){
        messageArea.innerHTML =`<h1>Good Afternoon</h1>`;
    }
    else {
        messageArea.innerHTML =`<h1>Good Morning</h1>`;
    }
}
)