import { Component, Input, OnInit } from '@angular/core';
import { MessageDTO } from 'src/app/model/MessageDTO';

@Component({
  selector: 'app-proto-message',
  templateUrl: './proto-message.component.html',
  styleUrls: ['./proto-message.component.css']
})
export class ProtoMessageComponent implements OnInit {


  @Input() message:MessageDTO;
 
  constructor() { }


  ngOnInit() { }

  toggle(param1: number, param2: number): boolean{

    //console.log("method toggle get 2 args - 1 - "+ param1+", 2 -"+param2+ ".  result ="+ (param1==param2));
    return param1 == param2;
  }

  getMyId(){
    return +(localStorage.getItem("MyId") || -1);
  }
}
