import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AngularTutorialService {

  constructor(private http:Http) { }

  getPage() {
    return this.http.get('https://angular-app.airshipcms.io/api/pages/angular-tutorial')
      .toPromise()
      .then(res => res.json())
      .catch(err => err.json());
  }

}
