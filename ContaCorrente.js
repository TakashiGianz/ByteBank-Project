import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    // Atributos
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

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
        ContaCorrente.numeroDeContas += 1;
    }

    // Métodos
    sacar(valor){
        if(this._saldo <= valor) return ;

        this._saldo -= valor;
        return valor;
    }

    depositar(valor){
        if(valor <= 0) return;

        this._saldo += valor;
        return valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        return valor;
    }
}