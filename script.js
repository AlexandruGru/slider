const swipeContainer = document.querySelector('.card-container');
const body = document.querySelector('body');
let interval;

const changeContent = (type) => {
    if (type === 'js') {
        swipeContainer.style.margin = '';
        swipeContainer.classList.remove('card-container-css');
        swipeContainer.classList.remove('card-container-html');
        swipeContainer.classList.toggle('card-container-js');
        body.style.backgroundColor = '#ffd83b';
    }
    if (type === 'css') {
        swipeContainer.style.margin = '';
        swipeContainer.classList.toggle('card-container-css');
        swipeContainer.classList.remove('card-container-html');
        swipeContainer.classList.remove('card-container-js');
        body.style.backgroundColor = '#1f62ae';
    }
    if (type === 'html') {
        swipeContainer.classList.remove('card-container-css');
        swipeContainer.classList.toggle('card-container-html');
        swipeContainer.classList.remove('card-container-js');
        body.style.backgroundColor = '#da9766'; 
    }
}
