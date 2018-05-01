import { Component, OnInit } from "@angular/core";
import { CryptoGuruService } from "../services/crypto-guru-service";
import { MockData } from "../services/mock-data.service";

@Component({
  selector: "burst-page",
  templateUrl: "./burst.component.html",
  styleUrls: ["./burst.component.scss"]
})
export class BurstComponent {
  bestDeadlineInfo;
  currentShares;
  currentBlock;
  networkDifficulty = 31974;
  effectiveCapacity = 106;
  pendingPayout = 88.56;
  completedBlocks = [];

  constructor(public CG: CryptoGuruService, public mockData:MockData) {
    this.completedBlocks = mockData.blocks;
  }

  fetchData() {
    this.CG.connect().subscribe(evt => {
      let data = JSON.parse(evt.data);
      console.log(data);
      if (data.height) {
        if (this.currentBlock) this.completedBlocks.push(this.currentBlock);
        this.currentBlock = data;
      }
      if (data.currentShares) {
        this.currentShares = data.currentShares;
      }
      if (data.bestDeadlineInfo) {
        this.bestDeadlineInfo = data.bestDeadlineInfo;
      }
      if (data.height) {
        this.currentBlock = data;
      }
    });
  }
}
