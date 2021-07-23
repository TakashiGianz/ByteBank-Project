// Classe Base "Abstrata"
export class Conta {

    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error(`Você não deveria instanciar um objeto do tipo Conta diretamente, classe abstrata.`);
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    } 

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

    // Métodos

    // Método Abstrato
    sacar(valor){
        throw new Error(`O método sacar da Conta é abstrato`);
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
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