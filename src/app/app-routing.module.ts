import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SearcherComponent } from './searcher/searcher.component';


const routes: Routes = [
  { path: 'login', component: UserLoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'profiles/:id', component: UserProfileComponent},
  { path: 'home', component: HomescreenComponent, runGuardsAndResolvers: "always"},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'editProfile', component: EditProfileComponent},
  { path: 'search', component: SearcherComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
