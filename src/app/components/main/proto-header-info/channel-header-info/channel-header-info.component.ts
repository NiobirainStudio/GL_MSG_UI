import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {GroupDTO} from "../../../../model/GroupDTO";

@Component({
  selector: 'app-channel-header-info',
  templateUrl: './channel-header-info.component.html',
  styleUrls: ['./channel-header-info.component.css']
})
export class ChannelHeaderInfoComponent implements OnInit {

  name:string="";
   constructor() { }
  
   @Input() grpArray: GroupDTO[];
   @Input() selectedGrpId:number;
   @Input() selectedGrpType:number;
   @Input() selectedGrpName:string;
  // menu

  @Input() isChnlVisible:boolean;
  @Output() changeChnlVisible = new EventEmitter()
   ngOnInit() {
    
   }

   enableVisible(){
     this.changeChnlVisible.emit();
   }



}
