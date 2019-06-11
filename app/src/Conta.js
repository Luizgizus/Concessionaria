
const tarifaFixa = 0.20
const iluminacaoPublica = 50.00
const porcentagemImpostos = 0.3

class Conta {
    constructor(anoMes, consumo) {
        this.anoMes = anoMes
        this.consumo = consumo
    }

    getValorTotalPagamento() {
        const valorAPagar = (this.consumo * tarifaFixa) + iluminacaoPublica
        return (valorAPagar + (valorAPagar * porcentagemImpostos))
    }

    setAnoMes(anoMes) {
        let resp = "data não informado"
        if (anoMes && typeof anoMes === 'number' && anoMes > 0) {
            this.anoMes = anoMes
            resp = anoMes
        }

        return resp
    }

    setConsumo(consumo) {
        let resp = "Consumo não inválido"
        if (consumo && typeof consumo === 'number' && consumo >= 0) {
            this.consumo = consumo
            resp = consumo
        }

        return resp
    }

    toString() {
        return `Data: ${this.anoMes}, Consumo: ${this.consumo}`
    }
}

module.exports = Conta