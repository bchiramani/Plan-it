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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MessagesListPageComponent } from './components/pages/messages-list-page/messages-list-page.component';
import { CardComponent } from './components/elements/card/card.component';
import { InversedCardComponent } from './components/elements/inversed-card/inversed-card.component';
import { CardListComponent } from './components/elements/card-list/card-list.component';
import { DetailPageComponent } from './components/pages/detail-page/detail-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilPageComponent } from './components/pages/profil-page/profil-page.component';
import { AddPostFormComponent } from './components/elements/add-post-form/add-post-form.component';
import { PostComponent } from './components/elements/post/post.component';
import { FeedPageComponent } from './components/pages/feed-page/feed-page.component';
import { PostProfilComponent } from './components/elements/post-profil/post-profil.component';

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
    SignupPageComponent,
    MessagesListPageComponent,
    CardComponent,
    InversedCardComponent,
    CardListComponent,
    DetailPageComponent,
    ProfilPageComponent,
    AddPostFormComponent,
    PostComponent,
    FeedPageComponent,
    PostProfilComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
