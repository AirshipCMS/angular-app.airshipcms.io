import { Component, OnInit } from '@angular/core';
import { ElementsService } from './elements.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ElementsService]
})
export class ElementsComponent implements OnInit {

  elements:Array<any>;

  constructor(private service:ElementsService) { }

  ngOnInit() {
    this.getElements();
  }

  getElements() {
    this.service.getCollection()
      .then(res => {
        this.elements = res.map((element) => {
          element.fields.forEach((field) => {
            element[field.variable_name] = field.value;
          });
          return element;
        });
      }).catch(err =>{
        throw err;
      });
  }

}
