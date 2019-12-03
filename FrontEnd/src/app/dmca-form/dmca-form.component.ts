import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AuthService } from '../auth/auth.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dmca-form',
  templateUrl: './dmca-form.component.html',
  styleUrls: ['./dmca-form.component.scss']
})
export class DmcaFormComponent implements OnInit {

  songs: Object;

  private routeSub: Subscription;

  constructor(private _http: HttpService, private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit() { 
    this._http.getAll().subscribe(data => {
    this.songs = data;
    console.log(this.songs);
    }
    );

       this.routeSub = this.route.params.subscribe(params => { 
       var songID = params['id'];
       console.log(songID);
    });

  }
  
  addDmca(form: NgForm){
    console.log(form.value);
    
    var songID = form.value.type;
    var dmcaType = form.value.type;
    var userID = form.value.user;
    var datePos= form.value.date;
    
    let data: any = Object.assign(
      { songid: songID },
      { type: dmcaType},
      { user: userID },
      { date: datePos }
    );

    this._http.postDmca(data);
    //this._http.updateRating(songID, songRating);
  }

}
