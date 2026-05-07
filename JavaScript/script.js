/* ======= sem frameworks ================== */
/* ---- MENU MOBILE ----    Abre e fecha o menu ao clicar no botão hambúrguer */

function toggleMenu() {
    document.getElementById('menu').classList.toggle('aberto');
}

/* Fecha o menu ao clicar em qualquer link */
var links = document.querySelectorAll('#menu a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        document.getElementById('menu').classList.remove('aberto');
    });
}

/* ---- VALIDAÇÃO DO FORMULÁRIO DE CONTATO ----    Verifica os campos e simula o envio */
function enviar(e) {
    e.preventDefault(); /* impede recarregar a página */

    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var msg = document.getElementById('msg').value.trim();
    var ok = true;

    /* Valida nome: mínimo 3 caracteres */
    if (nome.length < 3) {
        marcarErro('nome', 'erroNome', true);
        ok = false;
    } else {
        marcarErro('nome', 'erroNome', false);
    }

    /* Valida e-mail com expressão regular */
    var reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!reEmail.test(email)) {
        marcarErro('email', 'erroEmail', true);
        ok = false;
    } else {
        marcarErro('email', 'erroEmail', false);
    }

    /* Valida mensagem: mínimo 10 caracteres */
    if (msg.length < 10) {
        marcarErro('msg', 'erroMsg', true);
        ok = false;
    } else {
        marcarErro('msg', 'erroMsg', false);
    }

    /* Se ESTIVER tudo válido, simula o envio */
    if (ok) {
        console.log('Nome:', nome, '| E-mail:', email, '| Mensagem:', msg);
        document.getElementById('form').reset();
        var sucesso = document.getElementById('sucesso');
        sucesso.classList.add('vis');
        /* Oculta a mensagem de sucesso após 4 segundos */
        setTimeout(function () {
            sucesso.classList.remove('vis');
        }, 4000);
    }

    return false;
}

/* Marca ou desmarca o erro de um campo */
function marcarErro(campoId, erroId, mostrar) {
    var campo = document.getElementById(campoId);
    var erro = document.getElementById(erroId);
    if (mostrar) {
        campo.classList.add('erro');
        erro.classList.add('vis');
    } else {
        campo.classList.remove('erro');
        erro.classList.remove('vis');
    }
}

/* Remove erro ao digitar no campo */
var campos = document.querySelectorAll('#form input, #form textarea');
for (var i = 0; i < campos.length; i++) {
    campos[i].addEventListener('input', function () {
        this.classList.remove('erro');
        var erroEl = this.parentElement.querySelector('.erro');
        if (erroEl) erroEl.classList.remove('vis');
    });
}