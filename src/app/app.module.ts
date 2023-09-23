import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CheckSampleComponent,
    CardProdutoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
