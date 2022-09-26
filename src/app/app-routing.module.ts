import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { MyStatusComponent } from './my-status/my-status.component';
import { ValidationGuard } from './validation.guard';

const routes: Routes = [{
  path: '', component: LoginComponent
},
{
  path: 'memberarea', 
  component: MembersComponent,
  canActivate: [ValidationGuard],
  canActivateChild: [ValidationGuard],
  children: [
    {
      path: '',
      component: CatalogComponent
    },
    {
      path: 'book/:isbn',
      component: BookComponent
    },
    {
      path: 'mystatus',
      component: MyStatusComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
