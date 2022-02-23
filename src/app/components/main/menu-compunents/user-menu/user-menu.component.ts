import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { UserDTO } from 'src/app/models/DTO_Models/UserDTO';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  //@Input currentUser: UserDTO;
  @Input() isVisible:boolean;
  @Output() isVisibleChange = new EventEmitter<boolean>()
  constructor() { }
  ngOnInit(): void {
  }
  disableVisible($event:any){
    if ($event.target == $event.currentTarget)
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
  disableVisibleFromButton(){
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
}
