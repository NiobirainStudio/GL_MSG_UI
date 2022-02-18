import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-search-bar',
  templateUrl: './chat-search-bar.component.html',
  styleUrls: ['./chat-search-bar.component.css']
})
export class ChatSearchBarComponent implements OnInit {
@Input () styleToggle:any;
  constructor() { }

  ngOnInit(): void {
  }
  

}
