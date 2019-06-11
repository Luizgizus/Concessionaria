const chai = require('chai')

const assert = chai.assert

const Cliente = require('../src/Cliente.js')
const Imovel = require('../src/Imovel.js')

describe('Teste Armazenar unidade de imovel em um cliente', () => {
    it('Armazenar unidade de imovel', () => {
        const cliente = new Cliente("Jose da silva", "1234567890")
        const imovel = new Imovel()

        cliente.pushImovel(imovel)

        assert.equal(cliente.getImovelById(imovel.identificador).toString(), imovel.toString());
    })
})