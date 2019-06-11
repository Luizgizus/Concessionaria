const chai = require('chai')

const assert = chai.assert

const Cliente = require('../src/Cliente.js')
const Imovel = require('../src/Imovel.js')
const Conta = require('../src/Conta.js')

describe('Teste retornar conta de maior valor', () => {
    it('conta de maior valor do jose da silva', () => {
        const cliente = new Cliente("Jose da silva", "1234567890")
        const imovel1 = new Imovel()

        const contaIMV1Jan = new Conta(201801, 1000)
        const contaIMV1Fev = new Conta(201802, 500)
        const contaIMV1Mar = new Conta(201803, 300)
        const contaIMV1Abr = new Conta(201804, 3956)
        const contaIMV1Mai = new Conta(201805, 1234)

        imovel1.pushConta(contaIMV1Jan)
        imovel1.pushConta(contaIMV1Fev)
        imovel1.pushConta(contaIMV1Mar)
        imovel1.pushConta(contaIMV1Abr)
        imovel1.pushConta(contaIMV1Mai)

        cliente.pushImovel(imovel1)

        const imovel2 = new Imovel()

        const contaIMV2Jan = new Conta(201801, 2000)
        const contaIMV2Fev = new Conta(201802, 3500)
        const contaIMV2Mar = new Conta(201803, 4936)
        const contaIMV2Abr = new Conta(201804, 100)
        const contaIMV2Mai = new Conta(201805, 4783)

        imovel2.pushConta(contaIMV2Jan)
        imovel2.pushConta(contaIMV2Fev)
        imovel2.pushConta(contaIMV2Mar)
        imovel2.pushConta(contaIMV2Abr)
        imovel2.pushConta(contaIMV2Mai)

        cliente.pushImovel(imovel2)

        assert.equal(cliente.getTopBill().toString(), contaIMV2Mar.toString());
    })


    it('conta de maior valor de uma lista de imoveis vazia', () => {
        const cliente = new Cliente("Jose da silva", "1234567890")

        assert.equal(cliente.getTopBill(), "Lista de imoveis vazia");
    })

    it('conta de maior valor de imovel sem conta', () => {
        const cliente = new Cliente("Jose da silva", "1234567890")

        const imovel = new Imovel()

        cliente.pushImovel(imovel)

        assert.equal(cliente.getTopBill(), "Imovel(eis) do cliente não tem nenhuma conta disponivel");
    })
})