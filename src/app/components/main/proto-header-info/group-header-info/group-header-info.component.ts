import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {GroupDTO} from "../../../../model/GroupDTO";

@Component({
  selector: 'app-group-header-info',
  templateUrl: './group-header-info.component.html',
  styleUrls: ['./group-header-info.component.css']
})
export class GroupHeaderInfoComponent implements OnInit {
  @Input() grpArray: GroupDTO[];
  @Input() selectedGrpId:number;
  @Input() selectedGrpType:number;
  @Input() selectedGrpName:string;
  // menu

  @Input() isGrpVisible:boolean;
  @Output() changeVisible = new EventEmitter()

  constructor() { }
  name:string;
  ngOnInit(): void {
    this.getGroupName();
  }
  getGroupName(){
    this.name = this.grpArray.filter(x => x.id === this.selectedGrpId)[0].name;
  }
  enableVisible(){}

}
