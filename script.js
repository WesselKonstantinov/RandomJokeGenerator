/* 
    Define a function that searches through the list of radio buttons 
    and returns the one button that has been checked
*/
const getCheckedRadioButton = radioButtons => Array.from(radioButtons).find(radioButton => radioButton.checked);

// Define a function that picks a random joke and displays it onto the page
const displayRandomJoke = jokes => {
    const jokeHeading = document.querySelector('.joke__heading');
    const jokeContent = document.querySelector('.joke__content');

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    jokeHeading.textContent = randomJoke.setup;
    jokeContent.textContent = randomJoke.punchline;
};

/* 
    Store a reference to the radio buttons and the button that 
    displays a random joke in a variable
*/
const radioButtons = document.querySelectorAll('.nav__radio');
const displayRandomJokeButton = document.querySelector('.nav__button');

// Attach a click event listener to the joke generator button
displayRandomJokeButton.addEventListener('click', () => {
    const checkedRadioButton = getCheckedRadioButton(radioButtons);

    // In case the user didn't check any of the radio buttons: 
    if (!checkedRadioButton) {
        alert('You forgot to pick a joke category.');
    } else {
        /* 
            One of the radio buttons has been checked => display a joke 
            based on the user's choice
        */
        switch (checkedRadioButton.value) {
            case 'animal-jokes':
                displayRandomJoke(animalJokes);
                break;
            case 'computer-jokes':
                displayRandomJoke(computerJokes);
                break;
            case 'birthday-jokes':
                displayRandomJoke(birthdayJokes);
                break;
            case 'food-jokes':
                displayRandomJoke(foodJokes);
                break;
            case 'sports-jokes':
                displayRandomJoke(sportsJokes);
                break;
        };
    };
});