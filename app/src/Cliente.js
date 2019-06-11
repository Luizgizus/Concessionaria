
const _ = require('lodash')

class Cliente {
    constructor(nome, cpf) {
        this.nome = nome
        this.cpf = cpf
        this.imoveis = {}
    }

    pushImovel(imovel) {
        this.imoveis[imovel.identificador] = imovel
    }

    getImovelById(identificador) {
        return this.imoveis[identificador]
    }

    getTopBill() {
        let maxValue = -Infinity
        let contaDeMaiorValor = null

        if (_.isEmpty(this.imoveis)) {
            return "Lista de imoveis vazia"
        } else {
            for (const ImoveisKey in this.imoveis) {
                const actualImovel = this.imoveis[ImoveisKey]
                for (const contaKey in actualImovel.contas) {
                    const actualConta = actualImovel.contas[contaKey]
                    const valorActualConta = actualConta.getValorTotalPagamento()
                    if (valorActualConta > maxValue) {
                        maxValue = valorActualConta
                        contaDeMaiorValor = actualConta
                    }
                }
            }

            if (maxValue === -Infinity && contaDeMaiorValor === null) {
                return "Imovel(eis) do cliente não tem nenhuma conta disponivel"
            } else {
                return contaDeMaiorValor
            }
        }
    }

    setNome(nome) {
        let resp = "Nome não informado"
        if (nome && nome.length) {
            this.nome = nome
            resp = nome
        }

        return resp
    }

    setCpf(cpf) {
        let resp = "Cpf não informado"
        if (cpf && cpf.length) {
            this.cpf = cpf
            resp = cpf
        }

        return resp
    }

    toString() {
        return `Nome: ${this.nome}, Cpf: ${this.cpf}`
    }
}

module.exports = Cliente