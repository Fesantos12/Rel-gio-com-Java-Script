const hora = document.querySelector('#horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

const relogio = setInterval(function time() {
    let date = new Date();
    let hr = date.getHours();
    let mnts = date.getMinutes();
    let scds = date.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (mnts < 10) mnts = '0' + mnts;
    if (scds < 10) scds = '0' + scds;

    hora.innerHTML = `<h2 class="h2horas">${hr}</h2> <h4>Horas</h4>`;
    minutos.innerHTML = `<h2 class="h2minutos">${mnts}</h2> <h4>Horas</h4>`;
    segundos.innerHTML = `<h2 class="h2segundos">${scds}</h2> <h4>Horas</h4>`;
});

