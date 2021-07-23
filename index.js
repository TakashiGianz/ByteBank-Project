import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";

// Clientes
const cliente1 = new Cliente("Fernando", 47000398841);
const cliente2 = new Cliente("Ellen", 48182838860);

// Contas Correntes
const ContaCorrente1 = new Conta(0, cliente1, 1001);
const ContaCorrente2 = new Conta(0, cliente2, 2001);

//  Conta Poupança
const ContaPoupanca1 = new Conta(50, cliente1, 1001);
// Ações


// Visualizações
console.log(ContaCorrente1);
console.log(ContaCorrente2);
console.log(ContaPoupanca1);
// console.log(`Número de contas no Bytebank: ${ContaCorrente.numeroDeContas}`);