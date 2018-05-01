import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HorizontalCardScrollerComponent, CardHolder } from './card-scroller/horizontal-card-scroller.component';
import { GenericCardComponent } from './card-scroller/generic-card/generic-card.component';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts'; // this is needed!

@NgModule({
  declarations: [
    HorizontalCardScrollerComponent,
    CardHolder,
    GenericCardComponent,
    DoughnutChartComponent,
    PieChartComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports:[
    GenericCardComponent,
    HorizontalCardScrollerComponent,
    CardHolder,
    DoughnutChartComponent,
    PieChartComponent,
    BarChartComponent,
  ],
  entryComponents:[
    CardHolder
  ],
})
export class SharedModule { }
