import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {
  baseURL: String;

  constructor(public http: Http) {
    this.baseURL = "https://api.github.com/users/";
  }
  getProfile(username) {
    return this.http.get(this.baseURL + username)
    .map(response => response.json());
  }
  getRepositories(username) {
    return this.http.get(this.baseURL + username + "/repos")
    .map(response => response.json());
  }
 
}
