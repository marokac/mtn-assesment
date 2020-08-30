import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './components/common/carousel/carousel.component';
import { EllmentDirective } from './diractives/ellment.directive';
import { CartComponent } from './components/common/cart/cart.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NavComponent } from './components/common/nav/nav.component';
import { ButtonComponent } from './components/common/button/button.component';
import { StoreComponent } from './components/store/store.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    EllmentDirective,
    CartComponent,
    HeaderComponent,
    NavComponent,
    ButtonComponent,
    StoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
