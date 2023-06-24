const form = document.getElementById('formulario');

function validaNumero(primeiroNumero, segundoNumero) {
    return segundoNumero > primeiroNumero;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let formEValido = false;
    const primNumero = document.getElementById('campo-a');
    const segunNumero = document.getElementById('campo-b');

    formEValido = validaNumero(primNumero.value, segunNumero.value);

    if (formEValido) {
        primNumero.classList.remove('error');
        segunNumero.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.sucess-message').style.display = 'block';
        primNumero.value = ''
        segunNumero.value = ''
    } else {
        document.querySelector('.sucess-message').style.display = 'none';
        document.querySelector('.error-message').style.display = 'block';
        primNumero.classList.add('error');
        segunNumero.classList.add('error');
    }
})