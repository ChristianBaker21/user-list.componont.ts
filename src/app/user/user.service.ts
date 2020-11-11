import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  import { User } from './user.class';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION, WSANOTINITIALISED } from 'constants';
import { SyncAsync } from '@angular/compiler/src/util';
import { ɵangular_packages_platform_browser_platform_browser_l } from '@angular/platform-browser';


const baseurl: string = "http://localhost:50455/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
  private http: HttpClient
  ) { 

  }
  list(): Observable<User[]> {
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }

  get(id: number): Observable<User> {
    return this.http.get(`${baseurl}/${id}`) as Observable<User>;
  }

  create(user: User): Observable<User> {
    return this.http.post(`${baseurl}`,user) as Observable<User>;
  }

  change(user: User): Observable<any> {
    return this.http.put(`${baseurl}/${user.id}`, user) as Observable<any>;
  }

  remove(user: User): Observable<User> {
    return this.http.delete(`${baseurl}/${user.id}`) as Observable<User>;
  }
}
