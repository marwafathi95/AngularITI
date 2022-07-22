import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { DatacomponentComponent } from './datacomponent/datacomponent.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CommentsComponent } from './comments/comments.component';
import { TdfComponent } from './tdf/tdf.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    FilterPipe,
    DatacomponentComponent,
    EmployeesComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    PagenotfoundComponent,
    CommentsComponent,
    TdfComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
