class Cotizador {
    constructor(m2, valorPisos, valorMedioDePago) {
        this.m2 = parseInt(m2)
        this.factorpisos = parseFloat(valorPisos)
        this.factormediodepago= parseFloat(valorMedioDePago)
    }
    calcularPrecioTotal() {
        return (this.m2 * this.factorpisos * this.factormediodepago).toFixed(2)
    }
}



