import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './views/account-page/account-page.component';
import { CartComponent } from './views/cart/cart.component';
import { HomePageComponent } from './views/home-page/home-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
