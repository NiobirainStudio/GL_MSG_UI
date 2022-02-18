import { Component, OnInit, Input} from '@angular/core';
import { MessageDTO } from 'src/app/model/MessageDTO';
@Component({
  selector: 'app-group-message',
  templateUrl: './group-message.component.html',
  styleUrls: ['./group-message.component.css']
})
export class GroupMessageComponent implements OnInit {

  @Input() messageData:MessageDTO;
  
  constructor() { }
  
  ngOnInit(): void {
  }
}
