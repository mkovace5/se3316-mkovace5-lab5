import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-dmca',
  templateUrl: './song-dmca.component.html',
  styleUrls: ['./song-dmca.component.scss']
})
export class SongDmcaComponent implements OnInit {
  private routeSub: Subscription;
  constructor(private _http:HttpService, private route: ActivatedRoute) { }
  songID : String;
  dmcas : Object;


  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      var songID = params['id'];
      console.log(songID);
      this._http.getDmca(songID).subscribe(data => {
           this.dmcas = data;
           console.log(this.dmcas);
         });
    });
  
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
