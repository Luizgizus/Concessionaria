const chai = require('chai')

const assert = chai.assert

const Cliente = require('../src/Cliente.js')

describe('Teste Armazenar Cliente', () => {
    it('Criar Cliente Jose da silva', () => {
        const cliente = new Cliente("Jose da silva", "1234567890")
        assert.equal(cliente.toString(), "Nome: Jose da silva, Cpf: 1234567890");
    })

    it('Criar vários clientes', () => {
        const joseSilva = new Cliente("Jose da silva", "1234567890")
        const MariaLoucura = new Cliente("Maria Luca da loucura", "012707070")
        const BrunaHeineken = new Cliente("Bruna Heineken da Silva", "123987569")

        assert.equal(joseSilva.toString(), "Nome: Jose da silva, Cpf: 1234567890");
        assert.equal(MariaLoucura.toString(), "Nome: Maria Luca da loucura, Cpf: 012707070");
        assert.equal(BrunaHeineken.toString(), "Nome: Bruna Heineken da Silva, Cpf: 123987569");
    })

    it('Criar Cliente sem nome', () => {
        const cliente = new Cliente("", "1234567890")
        assert.equal(cliente.setNome(""), "Nome não informado");
    })

    it('Criar Cliente sem CPF', () => {
        const cliente = new Cliente("Jose da silva", "")
        assert.equal(cliente.setCpf(""), "Cpf não informado");
    })
})