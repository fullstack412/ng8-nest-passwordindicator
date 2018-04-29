import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

const url = "http://localhost:3000/";

@Injectable()
export class PasswordService {

  constructor(public http: Http) { }

  checkPasswordStrength(password: string) {

    var data = {
      password: password
    };

    return this.http.post(url,data)
                    .map((response: any) => response.json());

  }

}
