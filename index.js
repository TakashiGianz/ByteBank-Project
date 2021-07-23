import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaSalario } from "./Contas/ContaSalario.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { Gerente } from "./Funcionários/Gerente.js";
import { Diretor } from "./Funcionários/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

// Clientes
const cliente1 = new Cliente("Fernando", 47000398841, "Alface");
const cliente2 = new Cliente("Ellen", 48182838860);

// Funcionários
const diretor1 = new Diretor("Erika", 10000, 16509356848);
const gerente1 = new Gerente("Camila", 5000, 47000289258);

// Contas Correntes
const contaCorrente1 = new ContaCorrente(cliente1, 1001);
const contaCorrente2 = new ContaCorrente(cliente2, 2001);

//  Conta Poupança
const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);

// Conta Salário
const contaSalario1 = new ContaSalario(50, cliente1, 1001);

// Cadastro de Senhas
diretor1.cadastrarSenha("Batata");
gerente1.cadastrarSenha("Cenoura");

// Sistema de Autenticação
const gerenteEstaLogado = SistemaAutenticacao.login(gerente1, "Cenoura");
const diretorEstaLogado = SistemaAutenticacao.login(diretor1, "Batata");
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "Alface");

// Ações
contaCorrente1.depositar(500);
contaCorrente2.depositar(1000);
contaPoupanca1.depositar(2000);
contaCorrente1.transferir(250, contaPoupanca1);

// Visualizações
console.log(contaCorrente1);
console.log(contaCorrente2);
console.log(contaPoupanca1);
console.log(contaSalario1);
console.log(
  `Número de contas correntes no Bytebank: ${ContaCorrente.numeroDeContasCorrentes}`
);
console.log(`Gerente logou? ${gerenteEstaLogado}`);
console.log(`Diretor logou? ${diretorEstaLogado}`);
console.log(`Cliente logou? ${diretorEstaLogado}`);
