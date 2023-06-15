import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public login: any;
  public user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params)
    let params: any = this.route.snapshot.params
    this.login = params.login

    this.getUserByLogin()

    console.log(this.login)
  }

  getUserByLogin(){
    this.userService.getUserByLogin('users', this.login).subscribe((res: any) => {
      this.user = res
    })
  }

}
