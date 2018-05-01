import { Component, Input, Output, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: "burst-block-card",
  templateUrl: "./burst-block-card.component.html",
  styleUrls: ["./burst-block-card.component.scss"]
})
export class BurstBlockCardComponent {
  @Input() icon = "bell-o";
  @Input() color = "green";
  @Input() height: number = 1231;
  @Input() winnerName: string = "winner";
  @Input() winnerAddress: string = "winner address";
  @Input() bestDeadline: number = 213123;
  @Input() reward: number = 123123;
  @Input() fees: number = 123213;
  @Input() baseTarget: number = 123123;
  @Input() active: boolean = true;
  @Input() created: string;
  @Input() id: number | string = this.height;

  get deadlineAsDate(): Date {
    if (this.bestDeadline) {
      return new Date(this.bestDeadline * 1000);
    }
  }

  get elapsedTime(): Date {
    if (this.created) {
      return new Date(
        new Date(Date.now()).getTime() - new Date(this.created).getTime()
      );
    }
    return new Date(0);
  }

  get percentComplete() {
    if (this.elapsedTime.getTime() > 0 && this.bestDeadline > 0) {
      return this.elapsedTime.getTime() / (this.bestDeadline * 1000) * 300;
    }
    return 0;
  }

  constructor(public elRef: ElementRef) {}
}
