import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { ArtformComponent } from './Pages/artform/artform.component';
import { SignupComponent } from './Pages/signup/signup.component';

import { ContactComponent } from './Pages/contact/contact.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SinglepageComponent } from './Pages/singlepage/singlepage.component';
import { LoginComponent } from './Pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArtformComponent,
    SignupComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    SinglepageComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
