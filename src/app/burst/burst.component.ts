import { Component, OnInit } from "@angular/core";
import { CryptoGuruService } from "../services/crypto-guru-service";
import { MockData } from "../services/mock-data.service";
import { BurstUserService } from "./services/burst-user.service";
import { BurstNetworkService } from "./services/burst-network.service";
import { BurstBlockService } from "./services/burst-block.service";

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

  constructor(
    public CG: CryptoGuruService,
    public mockData: MockData,
    public burstUser: BurstUserService,
    public burstNetwork: BurstNetworkService,
    public burstBlock: BurstBlockService
  ) {
    this.completedBlocks = mockData.blocks;
    this.fetchData();
  }

  fetchData() {
    // this.burstNetwork.getNodeData().subscribe(res => {
    //   console.log(res);
    // });

    this.burstUser.getUserData("14482730076313828665").subscribe((res)=>{
      console.log(res);
    });

    // this.burstBlock.getLastBlocksData().subscribe((res)=>{
    //   console.log(res);
    // });
  }

  fetchCGData() {
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
