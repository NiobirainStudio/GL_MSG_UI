import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-chat-menu',
  templateUrl: './user-chat-menu.component.html',
  styleUrls: ['./user-chat-menu.component.css']
})
export class UserChatMenuComponent implements OnInit {
  @Input() isVisible:boolean;
  @Output() changeVisible = new EventEmitter()
  constructor() { }
  ngOnInit(): void {
  }

  disableVisible(){
     this.changeVisible.emit();
  }


}



