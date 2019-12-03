import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dcma-notice',
  templateUrl: './dcma-notice.component.html',
  styleUrls: ['./dcma-notice.component.scss']
})
export class DcmaNoticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('content')) {
      document.getElementById('content').innerHTML = localStorage.getItem('content');
    }
  
      let content = document.getElementById('content');
    
  }

  edit(){
    document.getElementById("content").contentEditable = "true";
  }
  save(){
    let content = document.getElementById('content');
      document.getElementById("content").contentEditable = "false";
      localStorage.setItem('content', content.innerHTML);
  }

}
