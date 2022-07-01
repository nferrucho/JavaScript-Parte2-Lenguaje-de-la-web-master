var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturaDatosPaciente(form);
    var pacienteTr = construirTr(paciente);
    //validacion peso altura paciente
    var error = validarPaciente(paciente); 
    if (error.length > 0) {
        var mensajeError = document.querySelector("#mensaje-error")
        mensajeError.textContent= error;
        return;
    }

    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
    // para limpiar campos de entrada en la pantalla
    form.reset();
});

const capturaDatosPaciente = (form) => {
    //clase paciente con sus atributos
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        //envia los valores no los atributos de la clase
        imc: calcularIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}
const construirTr = (paciente) => {


    var pacienteTr = document.createElement("tr");
    //creamos la class de Tr
    pacienteTr.classList.add("paciente");


    //aplicamos la funcion para Td
    var nombreTd = construirTd(paciente.nombre, "info-nombre");
    var alturaTd = construirTd(paciente.altura, "info-altura");
    var pesoTd = construirTd(paciente.peso, "info-peso");
    var gorduraTd = construirTd(paciente.gordura, "info-gordura");

    var imcTd = document.createElement("td");

    nombreTd.textContent = paciente.nombre;
    alturaTd.textContent = paciente.altura;
    pesoTd.textContent = paciente.peso;
    gorduraTd.textContent = paciente.gordura;
    //imcTd.textContent = calcularIMC(peso,altura);

    //usando la funcion --> porque hablamos desde el objeto paciente
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}


const construirTd = (dato, clase) => {
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}

const validarPaciente = (paciente) => {
    if (validarPeso(paciente.peso))
        return " El peso esta fuera de rango..! ";
    else
        return "";
}