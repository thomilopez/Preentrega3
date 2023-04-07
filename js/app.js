const selectPisos = document.querySelector("select#pisos")
const selectMedio = document.querySelector("select#medio")
const inputMetros2 = document.querySelector("input#metros2")
const btnCotizar = document.querySelector("button.button.button-outline")
const valorTotal = document.querySelector("span#valorTotal")
const btnGuardar = document.querySelector("span.guardar")

function cargarCotizador(select, array) {
    if (array.length > 0) {
        array.forEach(element => {
            select.innerHTML += `<option value="${element.valor}">${element.tipo}</option>`
        });
    }
}

cargarCotizador(selectPisos, datosPisos)
cargarCotizador(selectMedio, datosMedioDePago)

function validarDatos() {
    return (selectPisos.value !== "..." && selectMedio.value !== "..." && parseInt(inputMetros2.value) >= 1 && parseInt(inputMetros2.value) <=9999)
}

function realizarCotizacion () {
    if (validarDatos()) {
        const cotizo = new Cotizador (inputMetros2.value, selectMedio.value, selectPisos.value)
        valorTotal.textContent = cotizo.calcularPrecioTotal()
    } else {
        alert("⛔️ Valores incorrectos, por favor ingrese valores correctos")
    }
}

btnCotizar.addEventListener("click", ()=> {
    realizarCotizacion()
})

btnGuardar.addEventListener("click", ()=>{
    const historial = {
        Pisos: selectPisos [selectPisos.options.selectedIndex].textContent,
        Medio: selectMedio [selectMedio.options.selectedIndex].textContent,
        Metros2: inputMetros2.value
    }
    localStorage.setItem ("Historial", JSON.stringify(historial))
})

