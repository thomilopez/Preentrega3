class Cotizador {
    constructor(m2, valorpiso, mediodepago) {
        this.m2 = parseInt(m2)
        this.factorpiso = parseFloat(valorpiso)
        this.factormediodepago= parseFloat(mediodepago)
    }
    calcularPrecioTotal() {
        return (this.valorpiso * this.m2 * this.factormediodepago).tofixed(2)
    }
}


