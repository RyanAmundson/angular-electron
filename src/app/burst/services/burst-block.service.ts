import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import 'rxjs';

@Injectable()
export class BurstBlockService {

blockUrl:string = "https://explore.burst.cryptoguru.org/api/v1/block/";
lastBlocksUrl:string = "https://explore.burst.cryptoguru.org/api/v1/last_blocks";
observeUrl:string = "https://explore.burst.cryptoguru.org/api/v1/observe";
supplyUrl:string = "https://explore.burst.cryptoguru.org/api/v1/supply";

    constructor(public http:HttpClient,public jsonp:Jsonp) { }

    getBlockData(blockIdOrHeight:string){
        return this.http.get(this.blockUrl + blockIdOrHeight);
    }

    getLastBlocksData(){
        return this.http.get(this.lastBlocksUrl);
    }

    getObserveData(){
        return this.http.get(this.observeUrl);
    }
    
    getSupplyData(){
        return this.http.get(this.supplyUrl);
    }

}
