import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';


const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
