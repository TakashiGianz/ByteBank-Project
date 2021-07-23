import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    // Atributos
    static numeroDeContas = 0;

    // Assessores
    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }


    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }
}