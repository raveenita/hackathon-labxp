import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-imersao',
  templateUrl: './imersao.component.html',
  styleUrls: ['./imersao.component.scss']
})
export class ImersaoComponent implements OnInit {

  dados : Data;
  selectedIndex = 0;
  renda: number;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dados = this.dataService.retornaData();
    if(!this.dados.nome){
      this.dados.nome = "Maria";
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

    if(this.selectedIndex == 4){
      if(document.getElementsByClassName('clicked').length != 0){
        this.selectedIndex += 1;
        document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
      }else{
        alert('Opa.. Sem previsões??..');
        return;
      }
    }

    if(this.selectedIndex == 3){
      if(document.getElementsByClassName('clicked').length != 0){
        this.selectedIndex += 1;
        document.getElementsByClassName('setaVoltarCad')[0].style.opacity = "1";
      }else{
        alert('Opa.. Sem metas??..');
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
