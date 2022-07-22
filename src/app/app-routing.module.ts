import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { TdfComponent } from './tdf/tdf.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{ path:'',component:HomeComponent },
{ path:'Home',component:HomeComponent },
{path:'Users',component:UsersComponent},
{path:'Posts',component:PostsComponent },
{path:'products',component:ProductsComponent },
{path:'tdf',component:TdfComponent},
{path:'login',component:LoginComponent},
{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
