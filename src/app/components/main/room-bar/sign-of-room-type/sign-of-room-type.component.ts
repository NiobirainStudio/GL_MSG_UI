import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-of-room-type',
  templateUrl: './sign-of-room-type.component.html',
  styleUrls: ['./sign-of-room-type.component.css']
})
export class SignOfRoomTypeComponent implements OnInit {
@Input() grpType:number;
  constructor() { }

  ngOnInit(): void {
  }

}
