import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dados: Data = {
    nome: '',
    cpf: ''
  };

  constructor() { }

  insereData(nomeVar:string, cpfVar:string /* Dados em geral */){
    this.dados = {
      nome: nomeVar,
      cpf: cpfVar
    };
  }

  retornaData(){
    return this.dados;
  }

}
