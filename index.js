import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

// Clientes
const cliente1 = new Cliente("Fernando", 47000398841);
const cliente2 = new Cliente("Ellen", 48182838860);

// Contas Correntes
const ContaCorrente1 = new ContaCorrente(cliente1, 1001);
const ContaCorrente2 = new ContaCorrente(cliente2, 2001);

//  Conta Poupança
const ContaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);

// teste new Conta();
const ContaTeste = new Conta(1, cliente2, 20003);

// Ações
ContaCorrente1.depositar(500);
ContaCorrente2.depositar(1000);
ContaPoupanca1.depositar(2000);
ContaCorrente1.transferir(250, ContaPoupanca1);

// Visualizações
console.log(ContaCorrente1);
console.log(ContaCorrente2);
console.log(ContaPoupanca1);
console.log(ContaTeste);
console.log(`Número de contas correntes no Bytebank: ${ContaCorrente.numeroDeContasCorrentes}`);