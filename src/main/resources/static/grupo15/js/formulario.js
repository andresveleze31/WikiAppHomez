const inputNombre = document.getElementById("nombres");
const inputApellido = document.getElementById("apellidos");
const inputSemestre = document.getElementById("semestre");
const inputCorreo = document.getElementById("correo");
const inputMensaje = document.getElementById("mensaje");
const btnSubmit = document.getElementById("submitBtn");

const msjErrorSemestre = document.getElementById("errorSemestre");
const msjErrorNombre = document.getElementById("errorName");
const msjErrorApellido = document.getElementById("errorApellido");
const msjErrorEmail = document.getElementById("errorEmail");
const msjErrorMensaje = document.getElementById("errorMensaje");



const maxCaracteres = 100;

function verificarCampos() {
  const strNombre = inputNombre.value;
  const strApellido = inputApellido.value;
  const strEmail = inputCorreo.value;
  const strSemestre = Number(inputSemestre.value.trim());
  const strMSG = inputMensaje.value;

  

  const correoValido = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    strEmail
  ); // Expresión regular para validar el formato del correo

  console.log(
    strNombre.length > 0 &&
      strApellido.length > 0 &&
      strEmail.length > 0 &&
      correoValido &&
      strSemestre >= 1 &&
      strSemestre <= 16 &&
      strMSG.length > 0
  );

  if (
    strNombre.length > 0 &&
    strApellido.length > 0 &&
    strEmail.length > 0 &&
    correoValido &&
    strSemestre >= 1 &&
    strSemestre <= 16 &&
    strMSG.length > 0
  ) {
    btnSubmit.style.display = "block"
  } else {
    btnSubmit.style.display = "none";
  }
}

inputNombre.addEventListener("input", (e) => {
  let texto = e.target.value;

  if (texto.length > maxCaracteres) {
    texto = texto.slice(0, texto.length - 1);
    console.log(texto);
    inputNombre.value = texto; // Actualiza el valor del input
  }

  msjErrorNombre.textContent = `Caracteres Escritos: ${texto.length} Max: 100`;
  verificarCampos();
});

inputNombre.addEventListener("focus", (e) => {
  inputNombre.style.border = "1px solid #3817e3";
  msjErrorNombre.style.display = "block";
      msjErrorNombre.style.color = "#3817e3";
      verificarCampos();

});

inputNombre.addEventListener("blur", (e) => {
  if(e.target.value == ""){
    inputNombre.style.border = "1px solid red";
    msjErrorNombre.style.color = "red";
    msjErrorNombre.textContent = `Obligatorio`;
  }
    verificarCampos();

});

//INPUT APELLIDO
inputApellido.addEventListener("input", (e) => {
  let texto = e.target.value;

  if (texto.length > maxCaracteres) {
    texto = texto.slice(0, texto.length - 1);
    console.log(texto);
    inputApellido.value = texto; // Actualiza el valor del input
  }

  msjErrorApellido.textContent = `Caracteres Escritos: ${texto.length} Max: 100`;
    verificarCampos();

});

inputApellido.addEventListener("focus", (e) => {
  inputApellido.style.border = "1px solid #3817e3";
  msjErrorApellido.style.display = "block";
  msjErrorApellido.style.color = "#3817e3";
    verificarCampos();

});

inputApellido.addEventListener("blur", (e) => {
  if (e.target.value == "") {
    inputApellido.style.border = "1px solid red";
    msjErrorApellido.style.color = "red";
    msjErrorApellido.textContent = `Obligatorio`;
  }
    verificarCampos();

});

//INPUT MENSAJE
inputMensaje.addEventListener("input", (e) => {
    let texto = e.target.value;
  if (texto.length > 0) {
    inputMensaje.style.border = "1px solid gray";
    msjErrorMensaje.style.display = "none";

  }
    verificarCampos();

});

inputMensaje.addEventListener("blur", (e) => {
  if (e.target.value == "") {
    inputMensaje.style.border = "1px solid red";
    msjErrorMensaje.style.display = "block"
    msjErrorMensaje.style.color = "red";
    msjErrorMensaje.textContent = `Obligatorio`;
  }
    verificarCampos();

});

//INPUT SEMESTRE

inputSemestre.addEventListener("input", (e) => {
    let semestre = Number(e.target.value);


    if(semestre < 1 || semestre > 16){
        inputSemestre.style.border = "1px solid red";
        msjErrorSemestre.style.display = "block";
        msjErrorSemestre.style.color = "red";
        msjErrorSemestre.textContent = `Semestre (0-16) *Obligatorio`;
    }else{
        inputSemestre.style.border = "1px solid gray";
        msjErrorSemestre.style.display = "none";

    }
      verificarCampos();



})

inputSemestre.addEventListener("blur", (e) => {
  if (e.target.value == "") {
    inputSemestre.style.border = "1px solid red";
    msjErrorSemestre.style.display = "block";
    msjErrorSemestre.style.color = "red";
    msjErrorSemestre.textContent = `Semestre (0-16) *Obligatorio`;
  }
    verificarCampos();

});

//INPUT EMAIL.
inputCorreo.addEventListener("input", (e) => {
  let correo = e.target.value.trim(); // Elimina espacios al inicio y al final
  const correoValido = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(correo); // Expresión regular para validar el formato del correo

  if (correo.length > maxCaracteres) {
    correo = correo.slice(0, maxCaracteres);
    inputCorreo.value = correo;
  }

  if (correo == "") {
    inputCorreo.style.border = "1px solid red";
    msjErrorEmail.style.display = "block"
    msjErrorEmail.style.color = "red";
    msjErrorEmail.textContent = "Obligatorio";
  } else if (!correoValido) {
    inputCorreo.style.border = "1px solid red";
    msjErrorEmail.style.display = "block";
    msjErrorEmail.style.color = "red";
    msjErrorEmail.textContent = "Formato de correo no válido";
  } else {
    inputCorreo.style.border = "1px solid #3817e3";
    msjErrorEmail.style.display = "block";
    msjErrorEmail.style.color = "#3817e3";
    msjErrorEmail.textContent = `Caracteres Escritos: ${correo.length} Max: 100`;
    msjErrorEmail.style.display = "block";
  }
    verificarCampos();

});

inputCorreo.addEventListener("blur", (e) => {
  let correo = e.target.value.trim();

  if (correo == "") {
    inputCorreo.style.border = "1px solid red";
    msjErrorEmail.style.display = "block";
    msjErrorEmail.style.color = "red";
    msjErrorEmail.textContent = "Obligatorio";
  }
    verificarCampos();

});


