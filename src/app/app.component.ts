import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  active:string;

  constructor(private router: Router){
    this.active = this.router.routerState.snapshot.url;
  }
}
