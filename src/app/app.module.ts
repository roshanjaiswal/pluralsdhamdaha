import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './_shared/shared.module';
import { CoreModule } from './_core/core.module';


import { HomeComponent } from './home/home.component';
import { AboutRakeshComponent } from './about-rakesh/about-rakesh.component';
import { AboutPluralsComponent } from './about-plurals/about-plurals.component';
import { ContactsComponent } from './contacts/contacts.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonationComponent } from './donation/donation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutDhamdahaComponent } from './about-dhamdaha/about-dhamdaha.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutRakeshComponent,
    AboutPluralsComponent,
    ContactsComponent,
    VolunteerComponent,
    DonationComponent,
    PageNotFoundComponent,
    GalleryComponent,
    AboutDhamdahaComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
