import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContasCorrentes = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContasCorrentes += 1;
  }

  // Sobrescrevendo o comporatemento de Sacar da classe mãe
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  }
}
