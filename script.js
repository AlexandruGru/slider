const dataObj = [
    {
        name: 'html',
        line1: 'html line 1 html line 1',
        line2: 'html line 2',
        line3: 'html line 3 html line 3',
        image: 'imgs/htmlLogo.png',
        background: '#da9766',
    },
    {
        name: 'css',
        line1: 'css line 1 css line 1',
        line2: 'css line 2',
        line3: 'css line 3 css line 3',
        image: 'imgs/cssLogo.png',
        background: '#1f62ae',
    },
    {
        name: 'js',
        line1: 'js line 1 js line 1',
        line2: 'js line 2',
        line3: 'js line 3 js line 3',
        image: 'imgs/jsLogo.png',
        background: '#ffd83b',
    },
];


const getBtns = document.querySelectorAll('.btn');
const mainImg = document.querySelector('.mainImg');
const firstLine = document.querySelector('.firstP');
const secondLine = document.querySelector('.secondP');
const thirdLine = document.querySelector('.thirdP');
const body = document.querySelector('body')

const changeContent = (type) => {
    dataObj.forEach(elem => {
        if (type === elem.name) {
            creationContent(elem);
        }
    })
}

const creationContent = (param) => {
    mainImg.setAttribute('src', param.image);
    firstLine.textContent = `${param.line1}`;
    secondLine.textContent = `${param.line2}`;
    thirdLine.textContent = `${param.line3}`;
    body.style.backgroundColor = `${param.background}`
}