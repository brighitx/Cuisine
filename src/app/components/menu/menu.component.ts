import { Router } from '@angular/router';
import { IDatabase } from 'src/app/interfaces/database-i';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public database: IDatabase, public router: Router) { }

  private signOut() {
    this.database.signOut();
    this.router.navigate(['start']);
  }
  ngOnInit() { }

}
