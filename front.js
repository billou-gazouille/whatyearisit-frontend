
const h1 = document.getElementById('year');


fetch('http://localhost:3000/year')
    .then(resp => resp.json())
    .then(data => {
        h1.innerHTML = data.year;
});