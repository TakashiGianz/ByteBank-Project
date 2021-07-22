import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// Clientes
const cliente1 = new Cliente();
cliente1.nome = "Fernando";
cliente1.cpf = 47000398841;

const cliente2 = new Cliente();
cliente2.nome = "Ellen";
cliente2.cpf = 48182838860;

// Contas Correntes
const ContaCorrente1 = new ContaCorrente();
ContaCorrente1.agencia = 1001;
ContaCorrente1.cliente = cliente1;

const ContaCorrente2 = new ContaCorrente();
ContaCorrente2.agencia = 2001;
ContaCorrente2.cliente = cliente2;

// Ações
const valorDepositado = ContaCorrente1.depositar(2000); 
const valorSacado = ContaCorrente1.sacar(1500);
const valorTransferido = ContaCorrente1.transferir(200, ContaCorrente2);

// Visualizações
console.log(`${cliente1.nome} depositou: R$${valorDepositado}`)
console.log(`${cliente1.nome} sacou: R$${valorSacado}`)
console.log(`${cliente1.nome} transferiu R$${valorTransferido} para ${cliente2.nome}`)
console.log(ContaCorrente1);
console.log(ContaCorrente2);
