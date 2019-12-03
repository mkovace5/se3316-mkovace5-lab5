import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  songs: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getAll().subscribe(data => {
      this.songs = data;
      console.log(this.songs);
    });
  }


  addSong(form: NgForm){
    console.log(form.value);


    var songName = form.value.title;
    var artistName = form.value.artist;
    var albumName = form.value.album;
    var songYear = form.value.year;
    var songComment = form.value.comment;
    var songGenre = form.value.genre;
    var songRating = form.value.rating;

    console.log(songName);
    console.log(artistName);
    console.log(albumName);
    console.log(songYear);
    console.log(songComment);
    console.log(songGenre);
    
    if(songName == undefined || artistName == undefined){
      if(songName == undefined){
        alert("Please Enter a Song Title");}
      else if(artistName == undefined){
        alert("Pleas Enter an Artist Name")
      }
    }
    
    else{
      let data: any = Object.assign(
      { title: songName },
      { artist: artistName },
      { album: albumName },
      { year: songYear },
      { comment: songComment },
      { genre: songGenre },
      { rating: songRating}
      );

      this._http.postSong(data);
    }

  
  }



}


