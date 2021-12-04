const swipeContainer = document.querySelector('.card-container');
const body = document.querySelector('body');
let interval;

const changeContent = (type) => {
    if (type === 'js') {
        swipeContainer.style.margin = '';
        swipeContainer.classList.remove('card-container-css');
        swipeContainer.classList.remove('card-container-html');
        swipeContainer.classList.toggle('card-container-js');
        body.style.backgroundColor = 'rgb(244,220,54)';
    }
    if (type === 'css') {
        swipeContainer.style.margin = '';
        swipeContainer.classList.toggle('card-container-css');
        swipeContainer.classList.remove('card-container-html');
        swipeContainer.classList.remove('card-container-js');
        body.style.backgroundColor = 'rgb(137,144,223)';
    }
    if (type === 'html') {
        swipeContainer.classList.remove('card-container-css');
        swipeContainer.classList.toggle('card-container-html');
        swipeContainer.classList.remove('card-container-js');
        body.style.backgroundColor = 'rgb(238,176,187)'; 
    }
}
