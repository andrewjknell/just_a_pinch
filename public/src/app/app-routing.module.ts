import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'onthespot', component: HomeComponent},
  {path:'edit', component:EditComponent},
  {path:'', pathMatch:'full', redirectTo: '/onthespot'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
