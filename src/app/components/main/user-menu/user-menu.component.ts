import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  @Input() isVisible:boolean;
  @Output() changeVisible = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  disableVisible($event:any){
    if ($event.target == $event.currentTarget)
    this.changeVisible.emit();
  }
  disableVisibleFromButton(){
    this.changeVisible.emit();
  }
}
