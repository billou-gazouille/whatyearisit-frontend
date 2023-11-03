
const p = document.getElementById('year');

const backendURLprefix = 'https://whatyearisit-backend-billou-gazouille.vercel.app/';
//const backendURLprefix = '';
//const backendURLprefix = 'http://localhost:3000/';

fetch(backendURLprefix + 'year/')
    .then(resp => resp.json())
    .then(data => {
        p.textContent = `YEAR: ${data.year}`;
});