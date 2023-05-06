let array = []

let botonAgregar = document.getElementById("agregar")
let botonEliminar = document.getElementById("borrar")
let enter1 = document.getElementById("inputAdd")
let enter2 = document.getElementById("inputDelete")

botonAgregar.addEventListener("click", agregar)
botonEliminar.addEventListener("click", eliminar)



function limpiar(){
    document.getElementById("inputAdd").value = ""
    document.getElementById("inputDelete").value = ""
}

function agregar(){
    let agregarArray = document.getElementById("inputAdd").value
    if(agregarArray != ""){
        array.push(agregarArray)
        document.getElementById("here").innerText = array
        limpiar()
    }
    

}

enter1.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      agregar();
      limpiar()
    }
  });

function eliminar(){
    let eliminarArray = document.getElementById("inputDelete").value
    let indice = array.indexOf(eliminarArray)
    if(eliminarArray != ""){
    array.splice(indice,1)
    document.getElementById("here").innerText = array
    limpiar()
  }
}

enter2.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      eliminar();
      limpiar()
    }
  });