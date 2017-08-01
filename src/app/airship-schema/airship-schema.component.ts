import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AirshipSchemaService } from './airship-schema.service';

@Component({
  selector: 'app-airship-schema',
  templateUrl: './airship-schema.component.html',
  providers: [AirshipSchemaService],
  styleUrls: ['../app.component.css']
})
export class AirshipSchemaComponent implements OnInit {
  body:any;

  constructor(private service: AirshipSchemaService, private sanitizer: DomSanitizer) { }

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
