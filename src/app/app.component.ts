import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  onHideNavigation(): boolean{
    if (this.router.url == '/error-page') {
      return false
    }
    else {
      return true
    }
  }
}
