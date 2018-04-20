import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class PasswordService {

  url = "http://localhost:3000/";

  constructor(public http: Http) { }

  makeAPICall(password: string) {

    var data = {
      password: password
    };
    return this.http.post(this.url,data)
                    .map(response => response.json());

  }

}
