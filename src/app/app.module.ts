import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { SharedModule } from 'shared/shared.module';

import { environment } from '../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';


import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    
    BrowserModule,
    SharedModule,
    AdminModule,
    FormsModule,
    ShoppingModule,
    CoreModule,

    AngularFireModule.initializeApp(environment.firebase),

    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'products', component: ProductsComponent}
    ])
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
