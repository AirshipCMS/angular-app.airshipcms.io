import { Component, OnInit } from "@angular/core";
import { AngularTutorialService } from "./angular-tutorial.service";
import { DomSanitizer } from "@angular/platform-browser";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
declare var window: any;

@Component({
  selector: "app-angular-tutorial",
  templateUrl: "./angular-tutorial.component.html",
  providers: [AngularTutorialService]
})
export class AngularTutorialComponent implements OnInit {
  body: any;

  constructor(
    private service: AngularTutorialService,
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
        window.loadPrism();
      })
      .catch(err => {
        throw err;
      });
  }
}
