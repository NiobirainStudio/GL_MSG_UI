import { Component, OnInit, Input} from '@angular/core';
import { MainComponent } from '../../main.component';

@Component({
  selector: 'app-meta-data-message',
  templateUrl: './meta-data-message.component.html',
  styleUrls: ['./meta-data-message.component.css']
})
export class MetaDataMessageComponent implements OnInit {
  @Input() messageData:any;
  constructor(private mainComponent: MainComponent) { }

  ngOnInit(): void {
  }
  getNickName(id:number):string{
    return this.mainComponent.GetUserById(id).nickName;
  }
}
