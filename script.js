const swipeContainer = document.querySelector('.card-container');
const buttons = document.querySelectorAll('.optionalImg');
const body = document.querySelector('body');

console.log(buttons[0].className.toLowerCase().includes('html'))

const changeContent = (type) => {
    if (type === 'js') {
        swipeContainer.style.margin = '';
        swipeContainer.classList.remove('card-container-css');
        swipeContainer.classList.remove('card-container-html');
        swipeContainer.classList.toggle('card-container-js');
        body.style.backgroundColor = 'rgb(244,220,54)';
        makeButtonBig('js');
    }
    if (type === 'css') {
        swipeContainer.style.margin = '';
        swipeContainer.classList.toggle('card-container-css');
        swipeContainer.classList.remove('card-container-html');
        swipeContainer.classList.remove('card-container-js');
        body.style.backgroundColor = 'rgb(137,144,223)';
        makeButtonBig('css');
    }
    if (type === 'html') {
        swipeContainer.classList.remove('card-container-css');
        swipeContainer.classList.toggle('card-container-html');
        swipeContainer.classList.remove('card-container-js');
        body.style.backgroundColor = 'rgb(238,176,187)'; 
        makeButtonBig('html');
    }
}

const makeButtonBig = (param) => {
    buttons.forEach (elem => {
        elem.className.toLowerCase().includes(param) ? elem.classList.add('optionalImgActive') : elem.classList.remove('optionalImgActive');
    })
}