import baloon from './../templates/baloon.hbs';
import reviewList from './../templates/review-list.hbs';

let baloonDiv = document.createElement('div');
let baloonHTML = baloon({adress: 'adress', reviews:[
        {
            author: 'svetlana',
            place: 'Шоколадница',
            date: '13.13.2015',
            text: 'Очень хорошее место'
        }
    ]
});

baloonDiv.innerHTML = baloonHTML;
document.body.appendChild(baloonDiv);

