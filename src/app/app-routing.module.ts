import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from "@angular/router";
import {FactureComponent} from "./facture/facture/facture.component";
import {FournisseurComponent} from "./fournisseur/fournisseur/fournisseur.component";
import {ClientComponent} from "./client/client/client.component";
import {StockComponent} from "./produit/stock/stock.component";
import {RayonComponent} from "./produit/rayon/rayon.component";
import {AppComponent} from "./app.component";
import {MenuComponent} from "./menu/menu.component";
import {LoginComponent} from "./client/login/login.component";
import {MainProductComponent} from "./main-product/main-product.component";
import {FormProductComponent} from "./form-product/form-product.component";
import {ProduitComponent} from "./produit/produit/produit.component";
import {UpdateProductComponent} from "./update-product/update-product.component";
import {DetailsproductComponent} from "./detailsproduct/detailsproduct.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";





const ROUTES: Routes = [
  {path:'login',component:LoginComponent},
  {path:'products',component:MainProductComponent,
    children: [
      {path:'formprod',component:FormProductComponent},
      {path:'prod',component:ProduitComponent}]
  },

  {path:'menu',component:MenuComponent},
  {path: 'client',component:ClientComponent},
  {path: 'facture', component: FactureComponent},
  {path: 'fournisseur',component:FournisseurComponent},
  {path: 'rayon',component:RayonComponent},
  {path:'stock',component:StockComponent},
  {path:'updateform/:idProduit',component:UpdateProductComponent},
  {path:'detailsproduct/:idProduit',component:DetailsproductComponent},

  {path:'',component:AppComponent},


];
@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
