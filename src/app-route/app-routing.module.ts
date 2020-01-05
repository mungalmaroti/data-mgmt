import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDataComponent } from './../app/view-data/view-data.component';

const routes: Routes = [{
  path: 'dashboard',
  component: ViewDataComponent
},{
  path: '**',
  component: ViewDataComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
