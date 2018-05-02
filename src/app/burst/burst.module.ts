
import { NgModule } from '@angular/core';
import { BurstComponent } from './burst.component';
import { CryptoGuruService } from '../services/crypto-guru-service';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import { BurstBlockCardComponent } from './burst-block-card/burst-block-card.component';
import { BurstBlockService } from './services/burst-block.service';
import { BurstNetworkService } from './services/burst-network.service';
import { BurstUserService } from './services/burst-user.service';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({

 declarations: [
    BurstBlockCardComponent,
      BurstComponent,
      BurstBlockCardComponent
    ],
    imports: [
      BrowserAnimationsModule,
      MatMenuModule,
      MatSidenavModule,
      SharedModule,
      MatCardModule,
      HttpClientModule,
      JsonpModule,
      BrowserModule,
    ],
    providers: [
      CryptoGuruService,
      BurstBlockService,
      BurstNetworkService,
      BurstUserService
    ]
})
export class BurstModule { }
