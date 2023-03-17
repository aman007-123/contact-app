import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { ContactManagerComponent } from './component/contact-manager/contact-manager.component';
import { EditContactComponent } from './component/edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ViewContactComponent } from './component/view-contact/view-contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'contact/admin', pathMatch: 'full' },
  { path: 'contact/admin', component: ContactManagerComponent },
  { path: 'contact/add', component: AddContactComponent },
  { path: 'contact/view/:contactId', component: ViewContactComponent },
  { path: 'contact/edit/:contactId', component: EditContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
