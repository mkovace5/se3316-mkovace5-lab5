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
    var songGenre = form.value.genre;

    console.log(songName);
    console.log(artistName);
    console.log(albumName);
    console.log(songYear);
    console.log(songGenre);

    let data: any = Object.assign(
      { title: songName },
      { artist: artistName },
      { album: albumName },
      { year: songYear },
      { genre: songGenre }
    );

    this._http.postSong(data);

  }

  /*{"songs":[    
    {"title":"Good song", "artist":"whomst", "album":"fun", "year":2000, "genre":"hip hop"},    
    {"title":"Take some", "artist":"ra", "album":"23", "year":2000, "genre":"dance",  
    {"title":"Hello", "artist":"1975", "album":"good times", "year":2000, "genre":"pop"},    
    {"title":"Edges", "artist":"ra", "album":"23", "year":2000, "genre":"dance}   
]} */ 

}


