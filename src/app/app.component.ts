import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {MyServiceService} from "./my-service.service";
import {Clips, GameInfo, Games} from "./model";
import {DomSanitizer} from "@angular/platform-browser";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  clips : Clips[];
  games : Games[];
  gameName: string;
  asyncSelected: string;
  typeaheadLoading: boolean;
  typeaheadNoResults: boolean;
  dataSource: Observable<any>;

  constructor(private srv : MyServiceService, public sanitizer: DomSanitizer,private elRef:ElementRef) {
    this.dataSource = Observable.create((observer: any) => {
      observer.next(this.asyncSelected);
    }).mergeMap((token: string) => this.getStatesAsObservable(token));
  }

  ngOnInit(): void {
    this.getGamesService({'limit' : '100'});
    this.getClipsService();

    }

  getClipsService(params?: Object) {
     this.srv.getClips(params).subscribe(
       data => {
         console.log(data.clips);
         this.clips = data.clips;
       },
      err => console.error(err),
      () => console.log('done loading clips')
    );
  }
  trustSrcUrl = function(data){
    return this.sanitizer.bypassSecurityTrustResourceUrl(data);
  }
  getGamesService(params?: Object) {
    this.srv.getGames(params).subscribe(
      data => {
        this.games = data.top;
        console.log(this.games);
      },
      err => console.error(err),
      () => {console.log('done loading games'); }
    );
  }


  getStatesAsObservable(token: string): Observable<any> {
    let query = new RegExp(token, 'ig');

    return Observable.of(
      this.games.filter((state: Games) => {
          return query.test(state.game.name);
      })
    );
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.item.game.name);
    this.getClipsService({'game': e.item.game.name});
  }


}
