import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: ['./group-menu.component.css']
})
export class GroupMenuComponent implements OnInit {

  @Input() isVisible:boolean;
  @Output() changeVisible = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  disableVisible($event:any){
    if ($event.target == $event.currentTarget)
    this.changeVisible.emit();
  }

}
