import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
import { ListClientComponent } from './list-client/list-client.component';
import { AddFactureComponent } from './GestionFactures/add-facture/add-facture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListFacturesComponent } from './GestionFactures/list-factures/list-factures.component';
import { ListFacturesPayerComponent } from './GestionFactures/list-factures-payer/list-factures-payer.component';
import { UpdateFactureComponent } from './GestionFactures/update-facture/update-facture.component';
import { DetailFactureComponent } from './GestionFactures/detail-facture/detail-facture.component';
import { NavbarComponent } from './navbar/navbar.component';
import {  RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    ListClientComponent,
    AddFactureComponent,
    ListFacturesComponent,
    ListFacturesPayerComponent,
    UpdateFactureComponent,
    DetailFactureComponent, NavbarComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
