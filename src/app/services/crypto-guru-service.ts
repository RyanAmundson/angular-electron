import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class CryptoGuruService {
    url = 'ws://localhost:8080';
    socket: WebSocket;

    private subject: Rx.Subject<any>;

    constructor(){

    }

    public connect(): Rx.Subject<any> {
      if (!this.subject) {
        this.subject = this.create(this.url);
        console.log('Successfully connected: ' + this.url);
      }
      return this.subject;
    }

    private create(url): Rx.Subject<any> {
        this.socket = new WebSocket(url);

        const observable = Rx.Observable.create((obs: Rx.Observer<any>) => {
            this.socket.onmessage = obs.next.bind(obs);
            this.socket.onerror = obs.error.bind(obs);
            this.socket.onclose = obs.complete.bind(obs);
                return this.socket.close.bind(this.socket);
        })
        const observer = {
          next: (data: Object) => {
              if (this.socket.readyState === WebSocket.OPEN) {
                this.socket.send(JSON.stringify(data));
              }
          }
      }
      return Rx.Subject.create(observer, observable);
    }
}
