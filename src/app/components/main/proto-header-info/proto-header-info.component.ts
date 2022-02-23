import { Component, OnInit, Input } from '@angular/core';
import { MainComponent } from '../main.component';
@Component({
  selector: 'app-proto-header-info',
  templateUrl: './proto-header-info.component.html',
  styleUrls: ['./proto-header-info.component.css']
})
export class ProtoHeaderInfoComponent implements OnInit {

  @Input() selectedGrpId:number;

  constructor( private mainComp: MainComponent) { }

  ngOnInit(): void {
  }
  currentGroupType:number = this.mainComp.selectedGroupType;
}
