
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule, Routes} from '@angular/router'
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AngularResizeEventModule } from 'angular-resize-event';
import { MyMessageComponent } from './components/main/proto-message/my-message/my-message.component';
import { FriendMessageComponent } from './components/main/proto-message/friend-message/friend-message.component';
import { HeaderInfoComponent } from './components/main/header-info/header-info.component';
import { FriendGroupBarComponent } from './components/main/friend-group-bar/friend-group-bar.component';
import { ProtoMessageComponent } from './components/main/proto-message/proto-message.component';
import { GroupBarComponent } from './components/main/group-bar/group-bar.component';
const appRoutes: Routes = [
  
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'main', component: MainComponent},
  { path: '',   redirectTo: 'login', pathMatch: 'full' }//,
  //{ path: '**', redirectTo: 'Main' }
];


@NgModule({
  declarations: [
    AppComponent,RegistrationComponent,LoginComponent,
     MyMessageComponent, FriendMessageComponent, HeaderInfoComponent,
      FriendGroupBarComponent, MainComponent, ProtoMessageComponent, GroupBarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    AngularResizeEventModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
export class FriendMessageModul{}
