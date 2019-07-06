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

  insereData(user: Data /* Dados em geral */){
    this.dados = user;
  }

  retornaData(){
    return this.dados;
  }

}
