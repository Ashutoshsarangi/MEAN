import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductsComponent} from './products/products.component';
import {ScheduleComponent} from './schedule/schedule.component';


const appRoutes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'products', component: ProductsComponent, data: { title: 'Heroes List' } },
  { path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'schedule', component: ScheduleComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
})

export class AppRoutingModule {


 }
