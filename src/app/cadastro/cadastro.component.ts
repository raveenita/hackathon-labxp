import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  nome:string = "";
  cpf:string = "";
  dtNasc:string = "";
  genero:string = "";
  senha: string = "";
  senhaRevalid: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectedIndex = 0;

  selectTab(): void {
    if(this.selectedIndex == 6){
      this.router.navigate(['./imersao']);
    }

    if(this.selectedIndex == 5){
      if(this.senha && this.senha == this.senhaRevalid){
        this.selectedIndex += 1;
        document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
      }else{
        alert('Já se esqueceu?');
      }
    }

    if(this.selectedIndex == 4){
      if(this.senha){
        this.selectedIndex += 1;
        document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
      }else{
        alert('Esse não tem como passar :/');
      }
    }

    if(this.selectedIndex == 3){
      if(this.genero){
        this.selectedIndex += 1;
        document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
      }else{
        alert('Poxa, fala para a gente..');
      }
    }

    if(this.selectedIndex == 2){
      if(this.dtNasc){
        this.selectedIndex += 1;
        document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
      }else{
        alert('Abre o e-mail aí, é rapidinho.');
      }
    }
    
    if(this.selectedIndex == 1){
      if(this.cpf){
        this.selectedIndex += 1;
        document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
      }else{
        alert('Sem seu CPF fica mais difícil te ajudar.');
      }
    }

    if(this.selectedIndex == 0){
      if(this.nome){
            this.selectedIndex += 1;
            document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
          }else{
            alert('Desse jeito não saberemos seu nome :(');
          }
    }
        
  }

  selectTabMinus(): void {
    if(this.selectedIndex > 1){
      this.selectedIndex -= 1;
    }else{
      this.selectedIndex -= 1;
      document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "0";
    }
  }
}
