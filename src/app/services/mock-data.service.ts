import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class MockData {

blocks = [
  {
  "height": 1,
  "winnerName": "wiinner1",
  "winnerAddress":" winner1address",
  "bestDeadline": 400,
  reward: 1000,
  fess:20,
  baseTarget: 1,
  created: new Date(Date.now()).getTime().toString()
},
{
  "height": 2,
  "winnerName": "wiinner2",
  "winnerAddress":" winner2address",
  "bestDeadline": 600,
  reward: 12000,
  fess:30,
  baseTarget: 2,
  created: new Date(Date.now()).getTime().toString()
},
{
  "height": 3,
  "winnerName": "wiinner1",
  "winnerAddress":" winner1address",
  "bestDeadline": 400,
  reward: 1000,
  fess:20,
  baseTarget: 1,
  created: new Date(Date.now()).getTime().toString()
}
];

constructor(){}

}
