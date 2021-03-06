import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { AirshipSchemaService } from "./airship-schema.service";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: "app-airship-schema",
  templateUrl: "./airship-schema.component.html",
  providers: [AirshipSchemaService]
})
export class AirshipSchemaComponent implements OnInit {
  body: any;

  constructor(
    private service: AirshipSchemaService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.service
      .getPage()
      .then(res => {
        this.body = this.sanitizer.bypassSecurityTrustHtml(
          res.fields.find(field =>
            field.variable_name === "body"
          ).value
        );
      })
      .catch(err => {
        throw err;
      });
  }
}
