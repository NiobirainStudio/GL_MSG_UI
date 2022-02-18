import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GroupDTO } from 'src/app/model/GroupDTO';
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

   //name = this.grpArray.map(({  }) => );;
   ngOnInit() {
     //this.subscription = this.data.currentEventMessage.subscribe(message => this.name = message.name)
   }
   
   ngOnDestroy() {
    if(this.subscription != undefined)
     this.subscription.unsubscribe();
   }




}
