import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LucideAngularModule, ShoppingBasket, UserCircle, UtensilsCrossed, Menu} from 'lucide-angular';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { SushiComponent } from './sushi/sushi.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { BoxcardsComponent } from './boxcards/boxcards.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenusComponent,
    SushiComponent,
    CardComponent,
    FooterComponent,
    BoxcardsComponent,
    DetailsComponent,
    CartComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    LucideAngularModule.pick({ ShoppingBasket, UserCircle,  UtensilsCrossed, Menu})
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


