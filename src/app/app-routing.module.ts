import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomePageRoutingModule } from './views/home-page/home-page-routing.module';

const routes: Routes = [
  { path: 'cart', component: HomePageRoutingModule },
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
