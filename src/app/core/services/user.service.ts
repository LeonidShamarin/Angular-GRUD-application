import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User, UserFormData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();

  constructor(private http: HttpClient) {}

  loadUsers(): Observable<User[]> {
    return this.http.get<User[]>('/assets/data/users.json').pipe(
      map(users => {
        this.users.next(users);
        return users;
      })
    );
  }

  addUser(userData: UserFormData): void {
    const newUser: User = {
      ...userData,
      createdAt: new Date().toISOString()
    };
    const currentUsers = this.users.getValue();
    this.users.next([...currentUsers, newUser]);
  }

  updateUser(index: number, userData: UserFormData): void {
    const currentUsers = this.users.getValue();
    const updatedUsers = currentUsers.map((user, i) => 
      i === index ? { ...user, ...userData } : user
    );
    this.users.next(updatedUsers);
  }

  deleteUser(index: number): void {
    const currentUsers = this.users.getValue();
    const updatedUsers = currentUsers.filter((_, i) => i !== index);
    this.users.next(updatedUsers);
  }
}