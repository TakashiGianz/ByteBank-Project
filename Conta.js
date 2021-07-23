export class Conta {

    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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