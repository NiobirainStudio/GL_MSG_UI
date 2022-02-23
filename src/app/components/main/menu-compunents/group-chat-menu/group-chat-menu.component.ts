import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-group-chat-menu',
  templateUrl: './group-chat-menu.component.html',
  styleUrls: ['./group-chat-menu.component.css']
})
export class GroupChatMenuComponent implements OnInit {
  @Input() isVisible:boolean;
  @Output() changeVisible = new EventEmitter()
  constructor() { }
  ngOnInit(): void {
  }

  disableVisible(){
     this.changeVisible.emit();
  }


}
