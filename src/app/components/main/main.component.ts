declare var jQuery: any;
import { Component, Inject, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { MainService } from 'src/app/services/main.service';

import { DOCUMENT } from '@angular/common';
import { GroupDTO } from 'src/app/models/DTO_Models/GroupDTO';
import { MessageDTO } from 'src/app/models/DTO_Models/MessageDTO';
import { UserDTO } from 'src/app/models/DTO_Models/UserDTO';
import { StorageService } from 'src/app/services/storage.service';
import { Group } from 'src/app/models/Inner_Models/Group';
import { Message } from 'src/app/models/Inner_Models/Message';
import { GXGM_DTO } from 'src/app/models/DTO_Models/GXGM_DTO';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
  groupArray: Array<Group> = [];
  messageArray: Array<Message> = [];
  usersArray: Array<UserDTO> = [];

  selectedGroupId: number;
  selectedGroupType: number;


// SELECTION UNIT
  constructor(
    public mainService: MainService, 
    public storageService: StorageService,
    @Inject(DOCUMENT) private document: Document) {}

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
    //------------------------------------------------------------//
    // DREAD_VER'S ADDITION
    //------------------------------------------------------------//
    // START HUB CONNECTION
    this.mainService.StartConnection();

    // CONNECT TO SIGNALR SERVER GROUPS
    setTimeout(() => { 
      this.mainService.StartGroupChannel(+(localStorage.getItem("UserSession") || -1));
    }, 1000);

    // GET ALL GROUPS FOR THE CURRENT USER
    this.GetAllUserGroups();

    // SETUP LISTENERS
    this.mainService.ListenOnMessages(this.MessageCallbackFunction);



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

      // Find group and set message array
      this.messageArray = this.groupArray.find(g => g.id == this.selectedGroupId)?.messages || [];
      console.log(this.messageArray);

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
        return new UserDTO(user_id, accountName, nickName, "Osas@gmail.com", "https://i.ytimg.com/vi/AuKyyYdkqhY/hqdefault.jpg", description)                                                             //        HARDCODE               HARDCODE               HARDCODE
      }else {  
        return  this.usersArray.filter(x => x.id === user_id)[0];
      }

  }


  GetMyId():number{
    return +(localStorage.getItem("MyId") || -1);
  }


  GetFriendNickNameByGroupId(group_id: number): string{
    /*
    if(this.UserGroupRelationsArray.filter(x => x.groupId === group_id && x.userId !== this.GetMyId())[0] == undefined){
      return "FriendName";
    }else{
      return this.GetUserById(this.UserGroupRelationsArray.filter(x => x.groupId === group_id && x.userId !== this.GetMyId())[0].userId).nickName;
    }
    */
   return "NO";
  }








  //------------------------------------------------------------//
  //------------------------------------------------------------//
  // DREAD_VER'S TOOLBOX OF METHODS
  //------------------------------------------------------------//
  //------------------------------------------------------------//





  //------------------------------------------------------------//
  // TOOL FUNCTIONS
  //------------------------------------------------------------//
  private GetSession(): number {
    return (+(localStorage.getItem("UserSession") || -1));
  }
  //------------------------------------------------------------//



  //------------------------------------------------------------//
  // EVENT FUNCTIONS
  //------------------------------------------------------------//

  // WRITE MESSAGE TO SERVER
  public WriteMessage() {
    this.mainService.SendTextMessage(this.GetSession(), this.document.getElementById('newMessage')?.innerHTML || '', this.selectedGroupId);
  }
  //------------------------------------------------------------//


  //------------------------------------------------------------//
  // LISTENER CALLBACKS
  //------------------------------------------------------------//
  // MESSAGE CALLBACK
  public MessageCallbackFunction = (data: MessageDTO): void => {
    console.log(data);
    // ACTION
    this.groupArray.find(g => g.id == data.groupId)?.messages.push(
      new Message(data)
    );
  }

  // GROUP CALLBACK
  public GroupCallbackFunction = (data: MessageDTO): void => {
    console.log(data);
  }
  
  // USER CALLBACK
  public UserCallbackFunction = (data: MessageDTO): void => {
    console.log(data);
  }
  //------------------------------------------------------------//



  //------------------------------------------------------------//
  // GET METHODS
  //------------------------------------------------------------//
  // ON INIT GET ALL USER GROUPS
  public GetAllUserGroups(){
    this.mainService.PostAndRecieveData< { groups: Array<GroupDTO> }, number >(this.GetSession(), '/GetUserGroups').subscribe(
      res => {
        console.log(res);
        res.groups.forEach(element => {
          this.storageService.storeGroup(element.id, element);
          
          this.groupArray.push(new Group(element));
        });
      },
      err => { 
        console.log(err); 
      }
    );
  }

  //------------------------------------------------------------//

  // ON GROUP CHOOSE GET LAST X MESSAGES
  public GetLastGroupMessages(groupId: number) {
    if ((this.groupArray.find(g => g.id == groupId)?.messages.length || 0) == 0){
      this.mainService.PostAndRecieveData< { messages: Array<MessageDTO> }, number >(groupId, '/GetLastGroupMessages').subscribe(
        res => {
          console.log(res);
          // ACTION
          res.messages.forEach(element => {
            this.groupArray.find(g => g.id == groupId)?.messages.push(
              new Message(element)
            );
          });
        },
        err => { 
          console.log(err); 
        }
      );
    }
  }
  
  //------------------------------------------------------------//

  // GET MORE GROUP MESSAGES AFTER RECEIVING THE LAST X MESSAGES
  public GetMoreGroupMessages(groupId: number, lastId: number) {
    this.mainService.PostAndRecieveData< { messages: Array<MessageDTO> }, GXGM_DTO >( new GXGM_DTO(groupId, lastId), '/GetXGroupMessages').subscribe(
      res => {
        console.log(res);
        // ACTION
        res.messages.forEach(element => {
          this.groupArray.find(g => g.id == groupId)?.messages.push(
            new Message(element)
          );
        });
      },
      err => { 
        console.log(err); 
      }
    );
  }
  //------------------------------------------------------------//
}
