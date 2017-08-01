import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StylingService } from './styling.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['../app.component.css'],
  providers: [StylingService]
})
export class StylingComponent implements OnInit {

  body:any;

  constructor(private service: StylingService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.service.getPage()
      .then(res => {
        this.body = this.sanitizer.bypassSecurityTrustHtml(res.fields.filter((field) => {
          return field.variable_name === 'body';
        })[0].value);
      })
      .catch(err => {
        throw err;
      });
  }

}
