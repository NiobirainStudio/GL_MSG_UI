import { Component, Input, OnInit, InputDecorator } from '@angular/core';
import { MessageDTO } from 'src/app/models/DTO_Models/MessageDTO';

@Component({
  selector: 'app-friend-message',
  templateUrl: './friend-message.component.html',
  styleUrls: ['./friend-message.component.css']
})
export class FriendMessageComponent implements OnInit {
  @Input() messageData:MessageDTO;
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
