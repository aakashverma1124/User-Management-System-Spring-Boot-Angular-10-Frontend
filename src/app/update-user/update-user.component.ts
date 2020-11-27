import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: User = new User ();
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error)) ;
  }

  onSubmit(): void {
    this.userService.updateUser(this.id, this.user).subscribe(data => {
      this.router.navigate(['/users']);
    }, error => console.log(error));
  }

}
