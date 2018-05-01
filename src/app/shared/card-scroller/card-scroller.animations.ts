import { trigger, state, style, animate, transition,group,keyframes, AnimationTriggerMetadata } from '@angular/animations';

export class Core {

  public static cardFlipIn = trigger('cardFlipIn', [
    transition(':leave',[
      style({width:'*',opacity:1}),
      style({transform:'rotateY( 0deg )'}),
      animate('0.5s ease', style({transform: 'rotateY( 180deg )',opacity: '0'})),
      animate('0.5s ease', style({width:0,margin:0,padding:0,border:0})),
    ]),
    transition('unchanged => added, void => added, deleted => added', [
      style({opacity:0, width:'0px'}),
      style({transform:'rotateY(180deg)'}),
      animate('0.3s ease', style({width:'*'})),
      animate('0.3s ease', style({transform:'rotateY(0deg)', opacity:1}))
    ])
  ]);
}
