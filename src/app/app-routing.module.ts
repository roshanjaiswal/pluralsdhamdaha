import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutDhamdahaComponent } from './about-dhamdaha/about-dhamdaha.component';
import { AboutRakeshComponent } from './about-rakesh/about-rakesh.component';
import { AboutPluralsComponent } from './about-plurals/about-plurals.component';
import { ContactsComponent } from './contacts/contacts.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonationComponent } from './donation/donation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-dhamdaha', component: AboutDhamdahaComponent },
  { path: 'about-rakesh', component: AboutRakeshComponent },
  { path: 'about-plurals', component: AboutPluralsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
