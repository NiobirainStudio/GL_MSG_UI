import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
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
