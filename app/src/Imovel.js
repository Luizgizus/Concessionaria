const uuid = require('uuid').v1

class Imovel {
    constructor() {
        this.identificador = uuid()
        this.contas = {}
    }

    pushConta(conta) {
        if (this.contas && this.contas[conta.anoMes]) {
            return "Conta já existente para esse mes"
        } else {
            this.contas[conta.anoMes] = conta
        }
    }

    getContaByDate(anoMes) {
        return this.contas[anoMes]
    }

    toString() {
        return `identificador: ${this.identificador}`
    }
}

module.exports = Imovel