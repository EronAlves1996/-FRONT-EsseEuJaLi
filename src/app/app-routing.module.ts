import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [{
  path: '', component: LoginComponent
},
{
  path: 'memberarea', component: MembersComponent,
  children: [
    {
      path: '',
      component: CatalogComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
