import {Component, Input, Output, ElementRef, OnInit } from '@angular/core';

@Component({
  selector:'generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls:['./generic-card.component.scss']
})
export class GenericCardComponent {
  @Input() icon = 'bell-o';
  @Input() color = "blue";
  @Input() title = "";
  @Input() type:string;
  @Input() date: string;
  @Input() active:boolean;
  @Input() id:string = (this.color + this.title + this.type +this.date);

  constructor(public elRef:ElementRef){}


}
