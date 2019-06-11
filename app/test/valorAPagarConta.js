const chai = require('chai')

const assert = chai.assert

const Conta = require('../src/Conta.js')

describe('Teste valor a paga de uma conta', () => {
    it('valor a paga de uma conta', () => {

        const conta = new Conta(201811, 1000)

        const finalValue = conta.getValorTotalPagamento()

        assert.equal(finalValue, 325.00)
    })

    it('valor a paga de uma conta sem consumo', () => {

        const conta = new Conta(201802, 0)

        const finalValue = conta.getValorTotalPagamento()

        assert.equal(finalValue, 65.0)
    })
})