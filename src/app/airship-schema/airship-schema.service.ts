import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AirshipSchemaService {

  constructor(private http:Http) { }

  getAirshipSchema() {
    return this.http.get('https://angular-app.airshipcms.io/api/pages/airship-schema')
      .toPromise()
      .then(res => res.json())
      .catch(err => err.json());
  }
}
