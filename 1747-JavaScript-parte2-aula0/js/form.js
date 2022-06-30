var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var paciente = capturaDatosPaciente(form);
    //var nombre = form.nombre.value;
    //var peso = form.peso.value;
    //var altura = form.altura.value;
    //var gordura = form.gordura.value
    
    var tabla = document.querySelector("#tabla-pacientes");

    pacienteTr = document.createElement("tr");     
    nombreTd = document.createElement("td");
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    nombreTd.textContent = nombre;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularIMC(peso,altura);

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);

});

function capturaDatosPaciente(form){
    //recibe datos formaulario por value
    var paciente = {
        nombre: form.nombre.value,
        peso : form.peso.value,
        altura: form.altura.value,
        gordura : form.gordura.value
    }

    return paciente;
}