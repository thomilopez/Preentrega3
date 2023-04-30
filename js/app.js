const selectPisos = document.querySelector("select#pisos")
const selectMedio = document.querySelector("select#medio")
const selectColor = document.querySelector("select#color")
const inputMetros2 = document.querySelector("input#metros2")
const btnCotizar = document.querySelector("button.button.button-outline")
const valorTotal = document.querySelector("span#valorTotal")
const btnGuardar = document.querySelector("span.guardar")
const pisos1 = []
const color1 = []
const medios1 = []
const URLA = 'js/constpisos.json'
const URLB = 'js/constcolores.json'
const URLC = 'js/constmedios.json'

const obtenerPisos = ()=> {
    fetch(URLA)
        .then((response)=> response.json() )
        .then((data)=> pisos1.push(...data) )
        .then(()=> cargarPisos(pisos1))
        .catch()
}

const cargarPisos = (array)=>{
    array.length > 0
    array.forEach(element => {
        selectPisos.innerHTML += `<option value="${element.valor}">${element.tipo}</option>`   
    })
}

obtenerPisos()

const obtenerColor = ()=> {
    fetch(URLB)
        .then((response)=> response.json() )
        .then((data)=> color1.push(...data) )
        .then(()=> cargarColores(color1))
        .catch()
}

const cargarColores = (array)=>{
    array.length > 0
    array.forEach(element => {
        selectColor.innerHTML += `<option value="${element.valor}">${element.tipo}</option>`   
    })
}

obtenerColor()

const obtenerMedios = ()=> {
    fetch(URLC)
        .then((response)=> response.json() )
        .then((data)=> medios1.push(...data) )
        .then(()=> cargarMedios(medios1))
        .catch()
}

const cargarMedios = (array)=>{
    array.length > 0
    array.forEach(element => {
        selectMedio.innerHTML += `<option value="${element.valor}">${element.tipo}</option>`   
    })
}

obtenerMedios()



function validarDatos() {
    return (selectPisos.value !== "..." && selectMedio.value !== "..." && parseInt(inputMetros2.value) >= 1 && parseInt(inputMetros2.value) <=9999 && selectColor.value !== "...")
}

function alertaError (){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error, corrobore los datos ingresados.',
        footer: '<a href=""></a>'
    })
}

function alertaCotizar(){
    Swal.fire({
        position: 'mid',
        icon: 'success',
        title: 'Su cotizacion fue un exito!',
        showConfirmButton: false,
        timer: 1500
    })

}

function realizarCotizacion () {
    if (validarDatos()) {
        const cotizo = new Cotizador (inputMetros2.value, selectMedio.value, selectPisos.value, selectColor.value)
        valorTotal.textContent = cotizo.calcularPrecioTotal()
        alertaCotizar()
    } else {
        alertaError ()
    }
}

btnCotizar.addEventListener("click", ()=> {
    realizarCotizacion()
})

btnGuardar.addEventListener("click", ()=>{
    const historial = {
        Pisos: selectPisos [selectPisos.options.selectedIndex].textContent,
        Medio: selectMedio [selectMedio.options.selectedIndex].textContent,
        Color: selectColor [selectColor.options.selectedIndex].textContent,
        Metros2: inputMetros2.value
    }
    localStorage.setItem ("Historial", JSON.stringify(historial))
    alertaGuardado()
})

function alertaGuardado(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se guardo su cotizacion con exito!',
        showConfirmButton: false,
        timer: 1500
    })
}


