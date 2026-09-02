import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { HermanoComponent } from './hermano/hermano.component';
import { EstiloHermanosDirective } from './estilo-hermanos.directive';
import { MiPipePersonalizadoPipe } from './mi-pipe-personalizado.pipe';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [AppComponent, PadreComponent, HijoComponent, HermanoComponent, EstiloHermanosDirective, MiPipePersonalizadoPipe, HomeComponent, ProductsComponent, ContactComponent, ProductDetailComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// npx @angular/cli@19.2.15 new chat-app --standalone=false
// ng g c login --skip-tests