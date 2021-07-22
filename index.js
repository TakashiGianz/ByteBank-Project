import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// Clientes
const cliente1 = new Cliente("Fernando", 47000398841);
const cliente2 = new Cliente("Ellen", 48182838860);

// Contas Correntes
const ContaCorrente1 = new ContaCorrente(cliente1, 1001);
const ContaCorrente2 = new ContaCorrente(cliente2, 2001);

// Ações
let valor = 200
const valorDepositado = ContaCorrente1.depositar(2000); 
const valorSacado = ContaCorrente1.sacar(1500);
const valorTransferido = ContaCorrente1.transferir(valor, ContaCorrente2);

// Visualizações
console.log(`${cliente1.nome} depositou: R$${valorDepositado}`)
console.log(`${cliente1.nome} sacou: R$${valorSacado}`)
console.log(`${cliente1.nome} transferiu R$${valorTransferido} para ${cliente2.nome}`)
console.log(ContaCorrente1);
console.log(ContaCorrente2);
console.log(`Número de contas no Bytebank: ${ContaCorrente.numeroDeContas}`);