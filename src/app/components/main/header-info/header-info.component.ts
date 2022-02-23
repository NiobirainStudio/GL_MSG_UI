import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';
import { GroupDTO } from 'src/app/models/DTO_Models/GroupDTO';
@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.css']
})
export class HeaderInfoComponent implements OnInit {


  name:string="";
   constructor() { }
  

   subscription?: Subscription;
  @Input() grpArray: GroupDTO[];
  @Input() selectedGrpId:number;
   @Input() isVisible:boolean;
   @Output() changeVisible = new EventEmitter()
   //name = this.grpArray.map(({  }) => );;
   ngOnInit() {
     //this.subscription = this.data.currentEventMessage.subscribe(message => this.name = message.name)
   }
   
   ngOnDestroy() {
    if(this.subscription != undefined)
     this.subscription.unsubscribe();
   }



   enableVisible(){
     this.changeVisible.emit();
   }



}
