const chai = require('chai')

const assert = chai.assert

const Cliente = require('../src/Cliente.js')
const Imovel = require('../src/Imovel.js')
const Conta = require('../src/Conta.js')

describe('Teste Armazenar uma conta em uma unidade de imovel', () => {
    it('Armazenar uma conta', () => {
        const cliente = new Cliente("Jose da silva", "1234567890")
        const imovel = new Imovel()
        const conta = new Conta(201801, 1000)

        cliente.pushImovel(imovel)

        imovel.pushConta(conta)

        assert.equal(imovel.getContaByDate(conta.anoMes).toString(), conta.toString());
    })

    it('Armazenar uma conta sem mes', () => {
        const conta = new Conta("", 1000)

        assert.equal(conta.setAnoMes(""), "data não informado");
    })

    it('Armazenar uma conta de uma mes que já tem conta', () => {
        const cliente = new Cliente("Jose da silva", "1234567890")
        const imovel = new Imovel()
        const contaJan1 = new Conta(201801, 1000)
        const contaJan2 = new Conta(201801, 2000)

        cliente.pushImovel(imovel)

        imovel.pushConta(contaJan1)

        assert.equal(imovel.pushConta(contaJan2), "Conta já existente para esse mes");
    })

    it('Armazenar uma conta sem consumo', () => {
        const cliente = new Cliente("Jose da silva", "1234567890")
        const imovel = new Imovel()
        const conta = new Conta(201801, 0)

        cliente.pushImovel(imovel)

        imovel.pushConta(conta)

        assert.equal(imovel.getContaByDate(conta.anoMes).toString(), conta.toString());
    })

    it('Armazenar uma cota com consumo negativo', () => {
        const conta = new Conta(201801, -100)

        assert.equal(conta.setConsumo(""), "Consumo não inválido");
    })
})