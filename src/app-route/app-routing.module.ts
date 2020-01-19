import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDataComponent } from './../app/view-data/view-data.component';
import { CompanyProfileComponent } from './../app/company-profile/company-profile.component';
import { UserProfileComponent } from './../app/user-profile/user-profile.component';

const routes: Routes = [{
  path: 'view-data',
  component: ViewDataComponent
},{
  path: 'company-profile',
  component: CompanyProfileComponent
},{
  path: 'user-profile',
  component: UserProfileComponent
},{
  path: '**',
  component: ViewDataComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
