GitSearch/src/app/about.service.ts /
@Maureenchepkirui
Maureenchepkirui Add a form with a function that finds a profile
 History
 1 contributor
27 lines (24 sloc)  744 Bytes
import { Injectable } from '@angular/core';
import {User  } from "./user";
import { HttpClient } from "@angular/common/http";
import {environment } from '../environments/environment';

import { map } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'
})
export class AboutService {
user : User
private userName:string;
constructor(private http: HttpClient) {
console.log("works")
this.userName = 'Maureenchepkirui'
   }
getProfileData(){
  return this.http.get(`https://api.github.com/users/${this.userName}?access_token=${environment.apiKey}`)
  .pipe(map(res => res));
}
getProfileRepos(){
  return this.http.get(`https://api.github.com/users/${this.userName}/repos?access_token=${environment.apiKey}`)
  .pipe(map(res => res));
}
}
