import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

const routes: Routes = [
  { path: 'home-one', component: HeaderComponent },
  {path: 'button-x', component: ButtonComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
