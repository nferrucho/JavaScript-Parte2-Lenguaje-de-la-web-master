var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturaDatosPaciente(form);
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);

});

function capturaDatosPaciente(form){
    //clase paciente con sus atributos
    var paciente = {
        nombre: form.nombre.value,
        peso : form.peso.value,
        altura: form.altura.value,
        gordura : form.gordura.value,
        //envia los valores no los atributos de la clase
        imc : calcularIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}
function construirTr(paciente){
    //var nombre = form.nombre.value;
    //var peso = form.peso.value;
    //var altura = form.altura.value;
    //var gordura = form.gordura.value
    

    var pacienteTr = document.createElement("tr");     
    //creamos la class de Tr
    pacienteTr.classList.add("paciente");

    // adicionamos los class a cada Td
    var nombreTd = document.createElement("td");
    nombreTd.classList.add("info-nombre");

    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");

    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");

    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");

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
