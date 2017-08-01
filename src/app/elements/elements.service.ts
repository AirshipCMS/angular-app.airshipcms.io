import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ElementsService {

  constructor(private http:Http) { }

  getCollection() {
    return this.http.get('https://angular-app.airshipcms.io/api/aerostat_collection/elements')
      .toPromise()
      .then(res => res.json())
      .catch(err => err.json());
  }
}
