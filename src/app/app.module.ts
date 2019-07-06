import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './cadastro/cadastro.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule }   from '@angular/forms';
import { ImersaoComponent } from './imersao/imersao.component';

@NgModule({ 
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    ImersaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
