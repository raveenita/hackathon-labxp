import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-imersao',
  templateUrl: './imersao.component.html',
  styleUrls: ['./imersao.component.scss']
})
export class ImersaoComponent implements OnInit {

  dados : Data;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dados = this.dataService.retornaData();
    if(!this.dados.nome){
      this.dados.nome = "Maria";
    }
  }

}
