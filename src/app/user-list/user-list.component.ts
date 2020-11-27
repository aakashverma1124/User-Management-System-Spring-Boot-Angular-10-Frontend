import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
  }

  updateUser(id: number): void {
    this.router.navigate(['update-user', id])
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    }, error => console.log(error));
  }

}
