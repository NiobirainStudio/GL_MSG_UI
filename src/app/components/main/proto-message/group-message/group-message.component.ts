import { Component, OnInit, Input} from '@angular/core';
import { MessageDTO } from 'src/app/model/MessageDTO';
import { MainComponent } from '../../main.component';
@Component({
  selector: 'app-group-message',
  templateUrl: './group-message.component.html',
  styleUrls: ['./group-message.component.css']
})
export class GroupMessageComponent implements OnInit {

  @Input() messageData:MessageDTO;
  
  constructor(private mainComponent:MainComponent) { }
  
  ngOnInit(): void {
  }
  getNickName(id:number):string{
    return this.mainComponent.GetUserById(id).nickName;
  }
}
