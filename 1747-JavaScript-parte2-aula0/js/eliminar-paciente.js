//seleccion de los pacientes nativos de la tabla
/*
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

pacientes.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function () {
    //console.log("Accion 2 clicks");
    //remueve de la lista el elemento
    this.remove();
    });
});
*/

var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function (event) {
    //tomar el parent de la celda
    event.target.parentNode.remove();

});