import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imersao',
  templateUrl: './imersao.component.html',
  styleUrls: ['./imersao.component.scss']
})
export class ImersaoComponent implements OnInit {

  dados : Data = {
    nome: '',
    cpf: ''
  };
  selectedIndex = 0;
  renda: number;
  constructor(private dataService: DataService,
              private router:Router) { }

  ngOnInit() {
    this.dados = this.dataService.retornaData();
  }

  addClassClkOne(val){
    if(document.getElementsByClassName('clicked').length != 0){
      for (let index = 0; index < document.getElementsByClassName('clicked').length; index++) {
        document.getElementsByClassName('clicked')[index].classList.remove('clicked');
      }
      val.target.classList.add("clicked");
    }else{
      val.target.classList.add("clicked");
    }
  }

  addClassClk(val){
    if(val.target.classList.contains('clicked')){
      val.target.classList.remove("clicked");
    }else{
      val.target.classList.add("clicked");
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
 
  selectTab(): void {

    if(this.selectedIndex == 6){
      this.router.navigate(['./final']);
      return;
    } 

    if(this.selectedIndex == 5){
      if(document.getElementsByClassName('clicked').length != 0){
        this.selectedIndex += 1;
        document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
      }else{
        alert('Está duro?');
        return;
      }
    }

    if(this.selectedIndex == 4){
      if(document.getElementsByClassName('clicked').length != 0){
        this.selectedIndex += 1;
        document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
      }else{
        alert('Opa.. Sem previsões??');
        return;
      }
    }

    if(this.selectedIndex == 3){
      if(document.getElementsByClassName('clicked').length != 0){
        this.selectedIndex += 1;
        document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
      }else{
        alert('Opa.. Sem metas??');
        return;
      }
    }

    if(this.selectedIndex == 2){
      if(this.renda){
        this.selectedIndex += 1;
        document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
      }else{
        alert('Opa.. Faltou alguma coisa..');
        return;
      }
    }
    
    if(this.selectedIndex == 1){
      if(document.getElementsByClassName('clicked').length != 0){
        this.selectedIndex += 1;
        document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
      }else{
        alert('Poxa, selecione algo :(');
        return;
      } 
    }

    if(this.selectedIndex == 0){
      if(document.getElementsByClassName('clicked').length != 0){
            this.selectedIndex += 1;
            document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
          }else{
            alert('Escolhe um aííí.');
            return;
          }
    }
        
  }
  

}
