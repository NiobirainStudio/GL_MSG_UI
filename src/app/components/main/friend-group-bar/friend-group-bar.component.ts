import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GroupDTO } from 'src/app/models/DTO_Models/GroupDTO';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-friend-group-bar',
  templateUrl: './friend-group-bar.component.html',
  styleUrls: ['./friend-group-bar.component.css']
})
export class FriendGroupBarComponent implements OnInit {
  @Input() friendOrGroupData: GroupDTO;

  @Output()
  groupSelected: EventEmitter<void> = new EventEmitter<void>();
  selectedGroupId: EventEmitter<void> = new EventEmitter<void>();
  //subscription?: Subscription;

  constructor(private service: MainService) { }

  ngOnInit() {
    //this.subscription = this.data.currentEventMessage.subscribe(message => this.message = message.name);
  }
  onClick(){
    
    console.log("click on friendGroupBar send data : " + this.friendOrGroupData.name +" with id: " + this.friendOrGroupData.id);
    //this.data.changeMessage(this.friendOrGroupData);
    this.selectGroup();
  }
  ngOnDestroy() {
    //if(this.subscription != undefined)
    //  this.subscription.unsubscribe();
  }






  selectGroup(){
    this.groupSelected.emit();
    this.selectedGroupId.emit();
  }
}
