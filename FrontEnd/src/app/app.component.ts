import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'se3316-mkovace5-lab5';

  constructor(public auth: AuthService) {}

  ngOnInit() {

  }

}
