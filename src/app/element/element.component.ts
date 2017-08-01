import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementService } from './element.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ElementService]
})
export class ElementComponent implements OnInit {

  elementID:string;
  element:any;

  constructor(private service:ElementService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.elementID = params['id'];
    });
    this.getElement();
  }

  getElement() {
    this.service.getAerostat(this.elementID)
      .then(res => {
        this.element = res;
        this.element.fields.forEach((field) => {
          this.element[field.variable_name] = field.value;
        });
      }).catch(err => {
        throw err;
      });
  }
}
