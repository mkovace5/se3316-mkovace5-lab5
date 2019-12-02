import { Component, OnInit } from '@angular/core';
import { FilterPipe } from "../filter.pipe";
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-song-review',
  templateUrl: './song-review.component.html',
  styleUrls: ['./song-review.component.scss']
})
export class SongReviewComponent implements OnInit {
  private routeSub: Subscription;
  constructor(private _http:HttpService, private route: ActivatedRoute) { }
  songID : String;
  reviews : Object;


  ngOnInit() {
    //var songID = "2afa";
    // this._http.getReviews(d).subscribe(data => {
    //   this.reviews = data;
    //   console.log(this.reviews);
    // });
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      var songID = params['id'];
      console.log(songID);
      this._http.getReviews(songID).subscribe(data => {
           this.reviews = data;
           console.log(this.reviews);
         });
    });
  
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  //for all reviews with song id = "id", list reviews
}
