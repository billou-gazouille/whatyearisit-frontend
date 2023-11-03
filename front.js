
const h1 = document.getElementById('year');

const backendURLprefix = 'https://whatyearisit-backend-billou-gazouille.vercel.app/';
//const backendURLprefix = '';
//const backendURLprefix = 'http://localhost:3000/';

fetch(backendURLprefix + 'year/')
    .then(resp => resp.json())
    .then(data => {
        h1.innerHTML = data.year;
});