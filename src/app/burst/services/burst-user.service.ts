import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import 'rxjs';

@Injectable()
export class BurstUserService {

// userDataUrl:string = "https://explore.burst.cryptoguru.org/api/v1/account/";
userDataUrl:string = "http://localhost:3000/api/v1/account/";

    constructor(public http:HttpClient,public jsonp:Jsonp) { }

    getUserData(id:string){
        return this.http.get(this.userDataUrl + id);
    }

}
