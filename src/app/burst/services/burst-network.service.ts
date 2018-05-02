import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import 'rxjs';

@Injectable()
export class BurstNetworkService {

    networkDataUrl:string = "http://burstcoin.cc:80/network/jsonp?callback=JSONP_CALLBACK";
    nodeDataUrl:string = "http://burstcoin.cc:80/node/jsonp?callback=JSONP_CALLBACK";
    poolDataUrl:string = "http://burstcoin.cc:80/pool/jsonp?callback=JSONP_CALLBACK";
    assetDataUrl:string = "http://burstcoin.cc:80/asset/jsonp?callback=JSONP_CALLBACK";

    constructor(public http:HttpClient, public jsonp:Jsonp) {

    }

    getNetworkData(){
        return this.jsonp.request(this.networkDataUrl);
    }

    getNodeData(){
        return this.jsonp.request(this.nodeDataUrl);
    }
    
    getPoolData(){
        return this.jsonp.request(this.poolDataUrl);
    }

    getAssetData(){
        return this.jsonp.request(this.assetDataUrl);
    }
}