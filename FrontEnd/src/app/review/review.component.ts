import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';
import { SongsComponent } from '../songs/songs.component';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  
  songs: Object;

  constructor(private _http: HttpService, private auth: AuthService) { }

  ngOnInit() { 
    this._http.getAll().subscribe(data => {
    this.songs = data;
    console.log(this.songs);
    }
    );

  }


  
  addReview(form: NgForm){
    console.log(form.value);
    
    var songID = form.value.songid;
    var userID = form.value.userid;
    var songRating = form.value.rating;
    var songReview = form.value.review;
    
    let data: any = Object.assign(
      { songid: songID },
      { userid: userID},
      { rating: songRating },
      { reviews: songReview }
    );

    this._http.postReview(data);
    //this._http.updateRating(songID, songRating);
  }
  

}
