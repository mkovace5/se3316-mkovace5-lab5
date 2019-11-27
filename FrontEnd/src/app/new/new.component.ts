import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private _http: HttpService) { }

  ngOnInit() {
  }

  addUser(form: NgForm){
    console.log(form.value);

    var userName = form.value.username;
    var passWord = form.value.password;

    console.log(userName);
    console.log(passWord);


    let data: any = Object.assign(
      { name: userName },
      { type: passWord }
    );

    this._http.postItem(data);

  }

}

