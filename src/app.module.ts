import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-route/app-routing.module';
import { AppComponent,userProfileDialog } from './app/app.component';
import { ViewDataComponent } from './app/view-data/view-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CompanyProfileComponent } from './app/company-profile/company-profile.component';
import { UserProfileComponent } from './app/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewDataComponent,
    userProfileDialog,
    CompanyProfileComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [userProfileDialog]
})
export class AppModule { }
