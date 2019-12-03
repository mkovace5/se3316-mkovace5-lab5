import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {

  private routeSub: Subscription;
  constructor(private _http:HttpService, private route: ActivatedRoute, public auth: AuthService) { }
  songID : String;
  song : Object;


  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      var songID = params['id'];
      console.log(songID);
      this._http.getSong(songID).subscribe(data => {
           this.song = data;
           console.log(this.song);
         });
    });
  
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
