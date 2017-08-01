import { Component, OnInit } from '@angular/core';
import { AngularTutorialService } from './angular-tutorial.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-angular-tutorial',
  templateUrl: './angular-tutorial.component.html',
  styleUrls: ['../app.component.css'],
  providers: [AngularTutorialService]
})
export class AngularTutorialComponent implements OnInit {

  body:any;

  constructor(private service: AngularTutorialService, private sanitizer:DomSanitizer) { }

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
