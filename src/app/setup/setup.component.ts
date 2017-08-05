import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { SetupService } from "./setup.service";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: "app-setup",
  templateUrl: "./setup.component.html",
  providers: [SetupService]
})
export class SetupComponent implements OnInit {
  page: any = {};

  constructor(private service: SetupService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.service
      .getPage()
      .then(res => {
        res.fields.map(field => {
          switch (field.variable_name) {
            case "body":
              this.page.body = this.sanitizer.bypassSecurityTrustHtml(
                field.value
              );
              break;
            default:
              this.page[field.variable_name] = field.value;
              break;
          }
        });
      })
      .catch(err => {
        throw err;
      });
  }
}
