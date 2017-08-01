import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StylingService {

  constructor(private http:Http) { }

  getPage() {
    return this.http.get('https://angular-app.airshipcms.io/api/pages/styling')
      .toPromise()
      .then(res => res.json())
      .catch(res => res.json());
  }

}
