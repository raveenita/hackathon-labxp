import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  dados : Data = {
    nome: '',
    cpf: ''
  };
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dados = this.dataService.retornaData();
  }

}
