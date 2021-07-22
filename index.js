class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    #saldo = 0;

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor
        }
    }

    depositar(valor){
        if(valor > 0){
        this.#saldo += valor
        console.log(`Seu saldo é de: R$${contaCorrenteFernando.#saldo}`)
        }
    }

}


const cliente1 = new Cliente();
cliente1.nome = "Fernando";
cliente1.cpf = 47000398841;

const cliente2 = new Cliente();
cliente2.nome = "Ellen";
cliente2.cpf = 48182838860;

const contaCorrenteFernando = new ContaCorrente();
contaCorrenteFernando.agencia = 1001;


contaCorrenteFernando.depositar(2000);
contaCorrenteFernando.sacar(1500);


console.log(`Olá ${cliente1.nome}`)
// console.log(`Seu saldo é de: R$${contaCorrenteFernando.#saldo}`)