const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var valor1 = (document.getElementById('valor1').value);
    var valor2 = (document.getElementById('valor2').value);

    if (valor1 < valor2) {
        const MensagemSucesso = document.querySelector('.validacao')
        MensagemSucesso.innerHTML = 'Números validos, o valor de B é maior que o valor de A.';
        MensagemSucesso.style.display = 'block';
        MensagemSucesso.style.backgroundColor = '#00FF00';
    } else if (valor1 > valor2){
        const MensagemSucesso = document.querySelector('.validacao')
        MensagemSucesso.innerHTML = 'Números inválidos, o valor de A é maior que o valor de B.';
        MensagemSucesso.style.display = 'block';
        MensagemSucesso.style.backgroundColor = '#FF0000';
    } else {
        const MensagemSucesso = document.querySelector('.validacao')
        MensagemSucesso.innerHTML = 'Números inválidos, os valores de A e B são iguais.';
        MensagemSucesso.style.display = 'block';
        MensagemSucesso.style.backgroundColor = '#FF0000';
    }
})