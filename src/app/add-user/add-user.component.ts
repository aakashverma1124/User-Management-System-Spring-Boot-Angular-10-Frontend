import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    this.userService.addUser(this.user).subscribe(data => {
      this.goToUserList();
    },
      error => (console.log(error)));
  }

  goToUserList(): void {
     this.router.navigate(['/users']);
  }

  onSubmit(): void {
  this.saveUser();
  }

}
