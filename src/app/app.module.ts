
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
import { ContentPreviewInnerMessageComponent } from './components/main/proto-message/content-preview-inner-message/content-preview-inner-message.component';
import { MetaDataMessageComponent } from './components/main/proto-message/meta-data-message/meta-data-message.component';
import { GroupMessageComponent } from './components/main/proto-message/group-message/group-message.component';
import { CustomDateFormatPipePipe } from './pipes/custom-date-format-pipe.pipe';
import { ChatSearchBarComponent } from './components/main/chat-search-bar/chat-search-bar.component';
import { MainMenuComponent } from './components/main/menu-compunents/main-menu/main-menu.component';
import { UserMenuComponent } from './components/main/menu-compunents/user-menu/user-menu.component';
import { GroupMenuComponent } from './components/main/menu-compunents/group-menu/group-menu.component';
import { UserChatMenuComponent } from './components/main/menu-compunents/user-chat-menu/user-chat-menu.component';
import { GroupChatMenuComponent } from './components/main/menu-compunents/group-chat-menu/group-chat-menu.component';
import { ProtoHeaderInfoComponent } from './components/main/proto-header-info/proto-header-info.component';
import { FriendHeaderInfoComponent } from './components/main/proto-header-info/friend-header-info/friend-header-info.component';
import { GroupHeaderInfoComponent } from './components/main/proto-header-info/group-header-info/group-header-info.component';
import { ChannelHeaderInfoComponent } from './components/main/proto-header-info/channel-header-info/channel-header-info.component';
import { RoomBarComponent } from './components/main/room-bar/room-bar.component';
import { SignOfRoomTypeComponent } from './components/main/room-bar/sign-of-room-type/sign-of-room-type.component';
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
      FriendGroupBarComponent, MainComponent, ProtoMessageComponent,
       GroupBarComponent, ContentPreviewInnerMessageComponent,
        MetaDataMessageComponent, GroupMessageComponent, CustomDateFormatPipePipe,
         ChatSearchBarComponent, MainMenuComponent, UserMenuComponent, GroupMenuComponent,
          UserChatMenuComponent,
          GroupChatMenuComponent,
          ProtoHeaderInfoComponent,
          FriendHeaderInfoComponent,
          GroupHeaderInfoComponent,
          ChannelHeaderInfoComponent,
          RoomBarComponent,
          SignOfRoomTypeComponent],
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
