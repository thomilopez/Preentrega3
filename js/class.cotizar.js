class Cotizador {
    constructor(m2, valorPisos, valorMedioDePago, valorColor) {
        this.m2 = parseInt(m2) || 0
        this.factorpisos = parseFloat(valorPisos) || 0
        this.factormediodepago= parseFloat(valorMedioDePago) || 0
        this.color = parseFloat(valorColor) || 0
    }
    calcularPrecioTotal() {
        return (this.m2 * this.factorpisos * this.factormediodepago * this.color).toFixed(2)
    }
}



