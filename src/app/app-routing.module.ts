import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformComponent } from './Pages/artform/artform.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { SinglepageComponent } from './Pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },

  {
    path:'artform',component:ArtformComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'signin',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'singlepage',component:SinglepageComponent
  },
  // {
  //   path:'back',component:ArtformComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
