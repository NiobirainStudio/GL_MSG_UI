declare var jQuery: any;
import { Component, Inject, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { MainService } from 'src/app/services/main.service';

import { DOCUMENT } from '@angular/common';
import { GroupDTO } from 'src/app/model/GroupDTO';
import { MessageDTO } from 'src/app/model/MessageDTO';
import { UserDTO } from 'src/app/model/UserDTO';
import { UserGroupRelationDTO } from 'src/app/model/UserGroupRelationDTO';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
  groupArray: Array<GroupDTO> = [];
  messageArray: Array<MessageDTO> = [];
  usersArray: Array<UserDTO> = [];
  UserGroupRelationsArray: Array<UserGroupRelationDTO> = [];

  selectedGroupId: number;
  selectedGroupType: number;




  constructor(public service: MainService, @Inject(DOCUMENT) private document: Document) {}

  onKey(event: any): void {
    // keyCode for the Enter key is 13
    if (event.keyCode === 13 && !event.shiftKey) {
      //console.log('enterPressed', event.target.innerText);

      this.WriteMessage();
      event.preventDefault();
    if (event.keyCode == 13 && event.shiftKey){
      document.execCommand('insertLineBreak');
    }
    }
  }

  ngOnInit() {
    // DreaD_ver's addition
    this.service.StartConnection();
    //this.service.OnReconnectedEvent();

    // Conncet to SignalR server groups
    setTimeout(() => {
      this.service.StartGroupChannel(+(localStorage.getItem("UserSession") || -1));
    }, 1000);

    this.GetGroups();

    // Setup listeners
    this.service.ListenOnMessages(this.MessageCallbackFunction);



    (function ($) {
      $(document).ready(function () {
        //$('document').ready(function(){


        function setMessageBarHeight() {
          var massageBar = $('.message_bar').first();
          var newHeight = $(window).height() - $(".right_header").height() - $(".response_bar").height();
          massageBar.height(newHeight);
          //console.log(newHeight + " - высота меседжбара");
        }

        function setRightMainColumMarginLeft() {
          var responseBar = $('.right_main_colum').first();
          var leftColum = $('.left_main_colum').first();
          responseBar.css('margin-left', leftColum.width())
        }


        function setUserListHeight() {
          var userList = $('.contactList').first();
          userList.height($(window).height() - $('.right_header').first().height());
        }

        function setResponseBarHeight() {
          $('.response_input').first().height();
          $('.response_bar').first().height($('.response_input').first().height() + 50);
        }

        function setSerchInMessageBarWidth(){
          $(".searchInMessageBar").first().width($('.right_main_colum').first().width());
        }

        // will remove to mediaquery
        function hideEmojiSendfileButtons() {
          if ($(window).width() > 700) {
            $('.response_contentWrap_button_sendFile').first().css('display', 'inline-block');
            $('.response_contentWrap_button_emoji').first().css('display', 'inline-block');
          } else {
            $('.response_contentWrap_button_sendFile').first().css('display', 'none');
            $('.response_contentWrap_button_emoji').first().css('display', 'none');
          }
        }
        // will remove to mediaquery
        function hideRightHeaderAvatarBar() {
          if ($(window).width() > 700) {
            $('.right_header_avatar_bar').first().css('display', 'inline-block');
          } else {
            $('.right_header_avatar_bar').first().css('display', 'none');

          }
        }
        function RightHeaderName() {
          if ($(window).width() > 700) {
            $('.right_header_userOrGroupInfo_name').first().width($('.right_main_colum').first().width() / 2 - $('.right_header_avatar').first().width() - 100);
          } else {
            $('.right_header_userOrGroupInfo_name').first().width($('.right_main_colum').first().width() / 2);

          }
        }


        function setRightWinowSize() {

          hideRightHeaderAvatarBar();
          setResponseBarHeight();
          setUserListHeight();
          setMessageBarHeight();
          hideEmojiSendfileButtons();
          setRightMainColumMarginLeft();
          window.scroll(0, 0);
          RightHeaderName();
          setSerchInMessageBarWidth();
          //responseBarHeight();

        }



        setRightWinowSize();
        window.onresize = function (event) {
          setRightWinowSize();
          console.log('changed');
        };

        //$(".response_input").keypress(function () {
        //  setRightWinowSize();
        //console.log(newHeight + " - heigh of messageBar");
        //})

      });
    })(jQuery);
  }

  onResized(event: ResizedEvent) {
    (function ($) {
      $(document).ready(function () {

        function setMessageBarHeight() {
          var massageBar = $('.message_bar').first();
          var newHeight = $(window).height() - $(".right_header").height() - $(".response_bar").height();
          massageBar.height(newHeight);

        }

        function setRightMainColumMarginLeft() {
          var responseBar = $('.right_main_colum').first();
          var leftColum = $('.left_main_colum').first();
          responseBar.css('margin-left', leftColum.width())
        }


        function setUserListHeight() {
          var userList = $('.contactList').first();
          userList.height($(window).height() - $('.right_header').first().height());
        }

        function setSerchInMessageBarWidth(){
          $(".searchInMessageBar").first().width($('.right_main_colum').first().width());
        }

        function setResponseBarHeight() {
          $('.response_input').first().height();
          $('.response_bar').first().height($('.response_input').first().height() + 50);
        }

        // will remove to mediaquery
        function hideEmojiSendfileButtons() {
          if ($(window).width() > 700) {
            $('.response_contentWrap_button_sendFile').first().css('display', 'inline-block');
            $('.response_contentWrap_button_emoji').first().css('display', 'inline-block');
          } else {
            $('.response_contentWrap_button_sendFile').first().css('display', 'none');
            $('.response_contentWrap_button_emoji').first().css('display', 'none');
          }
        }
        // will remove to mediaquery
        function hideRightHeaderAvatarBar() {
          if ($(window).width() > 700) {
            $('.right_header_avatar_bar').first().css('display', 'inline-block');
          } else {
            $('.right_header_avatar_bar').first().css('display', 'none');

          }
        }
        function RightHeaderName() {
          if ($(window).width() > 700) {
            $('.right_header_userOrGroupInfo_name').first().width($('.right_main_colum').first().width() / 2 - $('.right_header_avatar').first().width() - 100);
          } else {
            $('.right_header_userOrGroupInfo_name').first().width($('.right_main_colum').first().width() / 2);

          }
        }



        function setRightWinowSize() {

          hideRightHeaderAvatarBar();
          setResponseBarHeight();
          setUserListHeight();
          setMessageBarHeight();
          hideEmojiSendfileButtons();
          setRightMainColumMarginLeft();
          window.scroll(0, 0);
          RightHeaderName();
          setSerchInMessageBarWidth();

        }

        setRightWinowSize();

      });

    })(jQuery);

  }

//   SearchBar  show/hide
  searchInMessageBarStyle = 'searchInMessageBarDisable';
  searchInMessageButton(){

      if(this.searchInMessageBarStyle == 'searchInMessageBarEnable') {
        this.searchInMessageBarStyle = 'searchInMessageBarDisable';
      } else {
        this.searchInMessageBarStyle = 'searchInMessageBarEnable';
      }

  }

//   Main menu  show/hide
  isMainMenuVisible:boolean = false;
  mainMenuVisibleToggle(){
    this.isMainMenuVisible = !this.isMainMenuVisible;
  }
//   User menu  show/hide
  isUserMenuVisible:boolean = false;
  userMenuVisibleToggle(){
    this.isUserMenuVisible = true;
  }
  //   Group menu  show/hide                                       in process...
  isGroupMenuVisible:boolean = false;
  groupMenuVisibleToggle(){
    this.isGroupMenuVisible = !this.isGroupMenuVisible;
  }
  //   Сhanel menu  show/hide    
  isChanelMenuVisible:boolean = false;
  chanelMenuVisibleToggle(){
    this.isChanelMenuVisible = !this.isChanelMenuVisible;
  }
  //   Group CHAT menu  show/hide
  isGroupChatMenuVisible:boolean = false;
  groupChatMenuVisibleToggle(){
    if(this.selectedGroupType == 2){
    this.isGroupChatMenuVisible = !this.isGroupChatMenuVisible;
    }
  }
  //   User CHAT menu  show/hide
  isUserChatMenuVisible:boolean = false;
  userChatMenuVisibleToggle(){
    if(this.selectedGroupType == 1){
      this.isUserChatMenuVisible = !this.isUserChatMenuVisible;
      }
  }

  //   Сhannel CHAT menu  show/hide                                       in process...







  SelectGroupNameById(group_id: number): string{
    return this.groupArray.filter(x => x.id === group_id)[0].name;
  }




  SelectGroup(group_id: number){
      this.selectedGroupId = group_id;


       if(this.groupArray.filter(x => x.id === group_id)[0].groupType == undefined){
        this.selectedGroupType = 1;                                                               //        HARDCODE               HARDCODE               HARDCODE
      }else {                 
        this.selectedGroupType = this.groupArray.filter(x => x.id === group_id)[0].groupType;
      }
  }


  GetUserById(user_id:number): UserDTO{
      if(this.usersArray.filter(x => x.id === user_id)[0] == undefined){                         //        HARDCODE               HARDCODE               HARDCODE
        let description:string = "this is user with id - " + user_id;
        let nickName:string = "mr.HardCode № " + user_id;
        let accountName:string = "Uvuvwevwevwe Onyetenyevwe Ugwemuhwem Osas № " + user_id;
        return new UserDTO(user_id,accountName, nickName, "Osas@gmail.com", "https://i.ytimg.com/vi/AuKyyYdkqhY/hqdefault.jpg",description)                                                             //        HARDCODE               HARDCODE               HARDCODE
      }else {  
        return  this.usersArray.filter(x => x.id === user_id)[0];
      }

  }


  GetMyId():number{
    return +(localStorage.getItem("MyId") || -1);
  }


  GetFriendNickNameByGroupId(group_id: number): string{
    if(this.UserGroupRelationsArray.filter(x => x.groupId === group_id && x.userId !== this.GetMyId())[0] == undefined){
      return "FriendName";
    }else{
      return this.GetUserById(this.UserGroupRelationsArray.filter(x => x.groupId === group_id && x.userId !== this.GetMyId())[0].userId).nickName;
    }
  }

  GetUserGroupRelations() {
      this.service.PostAndRecieveData< { userGroupRelations: UserGroupRelationDTO[]} >(this.GetSession(), '/GetUserGroupRelations').subscribe(
        res => {
          console.log(res);
          res.userGroupRelations.forEach(element => {
            this.UserGroupRelationsArray.push(element);
          });
        },
        err => {
          console.log(err);
        }
      );
  }

    GetUsers() {
      this.service.PostAndRecieveData< { users: UserDTO[]} >(this.GetSession(), '/GetUsers').subscribe(
        res => {
          console.log(res);
          res.users.forEach(element => {
            this.usersArray.push(element);
          });
        },
        err => {
          console.log(err);
        }
      );
    }


  /// DreaD_ver's methods
  WriteMessage() {
    this.service.SendTextMessage(this.GetSession(), this.document.getElementById('newMessage')?.innerHTML || '', this.selectedGroupId);
  }

  GetGroups() {
    this.service.PostAndRecieveData< { groups: GroupDTO[]} >(this.GetSession(), '/GetUserGroups').subscribe(
      res => {
        console.log(res);
        res.groups.forEach(element => {
          this.groupArray.push(element);
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  GetMessages(group_id: number) {
    this.service.PostAndRecieveData< { messages: MessageDTO[]} >(group_id, '/GetGroupMessages').subscribe(
      res => {
        console.log(res);
        this.messageArray = [];
        res.messages.forEach(element => {
          this.messageArray.push(element);
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  private GetSession() {
    return (+(localStorage.getItem("UserSession") || -1));
  }

  public MessageCallbackFunction = (data: MessageDTO): void => {
    this.messageArray.push(data);
  }















  // ON INIT GET ALL USER GROUPS
  public GetAllUserGroups(){

  }

  // ON GROUP CHOOSE GET LAST X MESSAGES
  public msg_count_take = 40;
  public GetLastGroupMessages(){

  }
}
