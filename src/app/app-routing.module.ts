import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ImersaoComponent } from './imersao/imersao.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'imersao', component: ImersaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
