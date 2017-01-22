import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', loadChildren: './index/index.module#IndexModule' },
  { path: 'team', loadChildren: './team/team.module#TeamModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
