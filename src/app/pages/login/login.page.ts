import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDatabase } from 'src/app/interfaces/database-i';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(public dataBase: IDatabase, public router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.dataBase.signIn(this.user.email, this.user.password).then(() => {
      this.router.navigate(['main']);
    }).catch(() => {
    });
  }

}
