
const h1 = document.getElementById('year');


fetch('https://whatyearisit-backend-billou-gazouille.vercel.app/year')
    .then(resp => resp.json())
    .then(data => {
        h1.innerHTML = data.year;
});