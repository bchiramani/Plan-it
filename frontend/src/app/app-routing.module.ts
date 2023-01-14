import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { DetailPageComponent } from './components/pages/detail-page/detail-page.component';
import { FeedPageComponent } from './components/pages/feed-page/feed-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { MessagesListPageComponent } from './components/pages/messages-list-page/messages-list-page.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { SignupPageComponent } from './components/pages/signup-page/signup-page.component';


const routes: Routes = [ 
  {path: '',component:HomePageComponent},
  {path: 'home',component:HomePageComponent},
  {path:'about',component:AboutPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'services',component:ServicesPageComponent},
  {path:'feed',component:FeedPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'signup',component:SignupPageComponent},
  {path:'sproviderdetails/:id',component:DetailPageComponent},
  {path:'messageslist',component:MessagesListPageComponent},
  {path:'profile/:id',component:ProfilePageComponent},
  {path: '**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
