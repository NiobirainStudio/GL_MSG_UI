import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {GroupDTO} from "src/app/models/DTO_Models/GroupDTO";
import { MainComponent } from '../../main.component';

@Component({
  selector: 'app-friend-header-info',
  templateUrl: './friend-header-info.component.html',
  styleUrls: ['./friend-header-info.component.css']
})
export class FriendHeaderInfoComponent implements OnInit {

  name:string="";
   constructor(private mainComp: MainComponent) { }
  

   @Input() selectedGrpId:number = -1;

  // menu


   ngOnInit() {
   }
   friendName:string = this.mainComp.GetFriendNickNameByGroupId(this.selectedGrpId);

   toggleVisible(){
    this.mainComp.isUserMenuVisible = true;
   }





}
