import {
  Component,
  Directive,
  OnInit,
  Input,
  ContentChildren,
  ContentChild,
  ElementRef,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewRef,
  ComponentRef,
  forwardRef,
  Output,
  EventEmitter
} from "@angular/core";

import { Core } from './card-scroller.animations';

@Component({
  selector: "card-holder",
  template: `<ng-content class="holder"></ng-content>`,
  styleUrls: ["./horizontal-card-scroller.component.scss"]
})
export class CardHolder {}

export interface BaseCard {
  id: number | string;
}

export class ScrollerCard<T extends BaseCard> {
  id: number | string;
  get view() {
    return this.card.elRef.nativeElement;
  }
  index: number;
  card: any;
  status: "unchanged" | "moved" | "updated" | "added" | "deleted" = "unchanged";
  selected: boolean = false;

  constructor(
    card: T,
    index: number,
    status:
      | "unchanged"
      | "moved"
      | "updated"
      | "added"
      | "deleted" = "unchanged"
  ) {
    this.id = card.id;
    this.card = card;
    this.index = index;
    this.status = status;
  }
}

@Component({
  selector: "horizontal-card-scroller",
  templateUrl: "./horizontal-card-scroller.component.html",
  styleUrls: ["./horizontal-card-scroller.component.scss"],
  animations: [Core.cardFlipIn]
})
export class HorizontalCardScrollerComponent {
  @ViewChild("scrollContent", { read: ElementRef })
  scrollContainer: ElementRef;
  @ContentChildren("cardListItem") cards: QueryList<BaseCard>;

  @Input() maxSelectable: number = 0;
  @Input() fixedWidth: number = 180;
  @Input() maxCards: number = 0;

  @Output() cardSelected: EventEmitter<any> = new EventEmitter();
  @Output() cardDeselected: EventEmitter<any> = new EventEmitter();

  cardMap: Array<ScrollerCard<BaseCard>>;
  cardHolder: typeof CardHolder = CardHolder;

  constructor() {
  }

  ngAfterContentInit() {
    console.log(this.cards)
    this.update();
    this.cards.changes.subscribe(cards => this.update());
  }

  update() {
    if (!this.cardMap) this.cardMap = new Array();
    let i = 0;
    while (i < this.cardMap.length) {
      if (this.checkRemoved(this.cardMap[i], i)) {
        i++;
      }
    }

    this.cards.toArray().forEach((c, idx) => {
      this.getStatus(c, idx);
    });
    this.cardMap.slice(0, this.cards.length);
  }

  checkRemoved(card: ScrollerCard<BaseCard>, idx: number): boolean {
    let removed = false;
    let matchIndex = this.cards.toArray().findIndex(c => c.id == card.id);

    if (matchIndex == -1) {
      removed = true;
      this.cardMap.splice(idx, 1);
    } else if (idx != matchIndex) {
      this.cardMap[idx].status = "moved";
      this.cardMap[idx].index = matchIndex;
    }
    return removed;
  }

  getStatus(card:BaseCard,index:number){
    let matchIndex = this.cardMap.findIndex(c => c.id == card.id);

    if(!this.cardMap[index]){
      console.error("Two cards probably have the same ID..");
    }

    if(matchIndex == -1){
      this.cardMap.splice(index,0,new ScrollerCard(card,index,"added"));
    }else if(matchIndex != index){
      this.cardMap[index].status = "moved";
      this.cardMap[index].index = index;
      this.cardMap[index].card = card;
    }else if( matchIndex == index){
      this.cardMap[index].card = card;
      this.cardMap[index].status = "unchanged";
    }
  }

  cardClicked(card: ScrollerCard<BaseCard>) {
    card.selected = !card.selected;
    if (card.selected) {
      this.cardSelected.emit(card.card);
    } else {
      this.cardDeselected.emit(card.card);
    }
  }

  scroll(event: Event, direction: string, distance: number) {
    switch (direction) {
      case "left":
        var lInt = setInterval(() => {
          setTimeout(() => {
            clearInterval(lInt);
          }, distance);
          this.scrollContainer.nativeElement.scrollLeft -= 10;
        }, 10);
        break;
      case "right":
        var rInt = setInterval(() => {
          setTimeout(() => {
            clearInterval(rInt);
          }, distance);
          this.scrollContainer.nativeElement.scrollLeft += 10;
        }, 10);
        break;
    }
    event.preventDefault();
  }
}
