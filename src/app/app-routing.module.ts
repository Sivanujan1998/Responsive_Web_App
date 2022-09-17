import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchdetailsComponent } from '../app/fetchdetails/fetchdetails.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [
  { path: 'detail/:id', component: UserdetailComponent},
  { path: 'details', component: FetchdetailsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
