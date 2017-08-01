import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ElementService {

  constructor(private http:Http) { }

  getAerostat(id:string) {
    return this.http.get('https://angular-app.airshipcms.io/api/aerostats/' + id)
      .toPromise()
      .then(res => res.json())
      .catch(err => err.json());
  }
}
