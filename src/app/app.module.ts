import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/elements/footer/footer.component';
import { NavbarComponent } from './components/elements/navbar/navbar.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SignupPageComponent } from './components/pages/signup-page/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutPageComponent,
    HomePageComponent,
    ServicesPageComponent,
    NotfoundComponent,
    ContactPageComponent,
    LoginPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
