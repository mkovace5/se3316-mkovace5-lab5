import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dmca',
  templateUrl: './dmca.component.html',
  styleUrls: ['./dmca.component.scss']
})
export class DmcaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('security')) {
      document.getElementById('security').innerHTML = localStorage.getItem('security');
    }
  
      let content = document.getElementById('security');
    
  }

  edit(){
    document.getElementById("security").contentEditable = "true";
  }
  save(){
    let content = document.getElementById('security');
      document.getElementById("security").contentEditable = "false";
      localStorage.setItem('security', content.innerHTML);
  }

}
