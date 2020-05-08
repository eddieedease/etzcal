
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  FormsModule
} from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';

import { SerCredService } from './ser-cred.service';



const appRoutes: Routes = [
  { path: 'site', component: SiteComponent },
  { path: '',
    redirectTo: '/site',
    pathMatch: 'full'
  }
  // ,{ path: '**', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SiteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, {
        useHash: false,
        onSameUrlNavigation: 'reload'
      }, // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [SerCredService],
  bootstrap: [AppComponent]
})
export class AppModule { }
