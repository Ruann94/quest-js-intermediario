const inputs = document.querySelectorAll(".campo");
const botaoEnviar = document.getElementById('enviar');

botaoEnviar.addEventListener('click', function(event) {
  event.preventDefault();
  validarCampos();
});

inputs.forEach((input) => {
  input.addEventListener('input', function() {
    const campoValido = input.value.trim() !== "";
    const formNull = input.nextElementSibling;

    if (campoValido) {
      input.classList.add('valido');
      input.classList.remove('invalido');
      input.style.borderColor = '#00e413';
      formNull.innerHTML = "";
    } else {
      input.classList.remove('valido');
      input.classList.add('invalido');
      input.style.borderColor = '#F52E2E';
      formNull.innerHTML = "Campo Obrigatório";
    }
  });
});

function validarCampos() {
  inputs.forEach((input) => {
    const campoNull = input.value.trim() === "";
    const formNull = input.nextElementSibling;

    if (campoNull) {
      input.classList.remove('valido');
      input.classList.add('invalido');
      input.style.borderColor = '#F52E2E';
      formNull.innerHTML = "Campo Obrigatório";
    } else {
      input.classList.remove('invalido');
      input.classList.add('valido');
      input.style.borderColor = '#00e413';
      formNull.innerHTML = "";
    }
  });
}