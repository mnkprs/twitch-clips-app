import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class MyServiceService {

  constructor(private  http: HttpClient) { }

  private _headers = new HttpHeaders().set('Accept', 'application/vnd.twitchtv.v5+json');

     createAuthorizationHeader(headers: HttpHeaders) {
       return headers = this._headers.append('client-id', 'ldaptib5370r8gfjq66ih2sn0r8r9u');
     }

      getClips(params?: any) {
        let headers = new HttpHeaders();
        headers = this.createAuthorizationHeader(headers);

        if(params) {
          return this.http.get("https://api.twitch.tv/kraken/clips/top", {headers : headers, params : params});
        } else {
          return this.http.get("https://api.twitch.tv/kraken/clips/top", {headers : headers});
        }

      }

      getGames(params?: any) {
        let headers = new HttpHeaders();
        headers = this.createAuthorizationHeader(headers);
        return this.http.get("https://api.twitch.tv/kraken/games/top", {headers : headers, params : params});
      }

}
