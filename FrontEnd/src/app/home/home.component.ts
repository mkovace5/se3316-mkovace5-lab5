import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm , FormControl} from '@angular/forms';
import { SongsComponent } from '../songs/songs.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  searchText = new FormControl('')
  constructor(private _http: HttpService) { }
  songs: Object;
  fSongs: Object;

  checkSearch(){
    this.searchText.valueChanges.subscribe(val => {
      this._http.searchSongs(val).subscribe(data => {
        this.fSongs = data;
        console.log(data)
      });
    })

  }
  ngOnInit() {
    this._http.getAll().subscribe(data => {
      this.songs = data;
      console.log(this.songs);
    });
    this.checkSearch();
  }

  goToSong(obj){
    var id = obj;
    console.log(id);
  }
}
