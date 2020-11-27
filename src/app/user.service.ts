import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getUsersURL = "http://localhost:8080/users/get-users";
  private addUserURL = "http://localhost:8080/users/add-user";
  private getUserURL = "http://localhost:8080/users/get-user";
  private updateUserURL = "http://localhost:8080/users/update-user";
  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.getUsersURL}`);
  }

  addUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.addUserURL}`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.getUserURL}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.httpClient.put(`${this.updateUserURL}/${id}`, user);
  }
}
