import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html"
})
export class NavBarComponent implements OnInit {
  active: string;
  menuOpen: boolean = false;

  constructor() {}

  ngOnInit() {
    this.active = window.location.pathname;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
