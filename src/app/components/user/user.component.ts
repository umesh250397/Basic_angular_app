import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // template: '<h2>John Doe</h2>'
  // styles: [`
  //   h2 {
  //     color: blue
  //   }
  // `]
})

export class UserComponent implements OnInit{
  //Properties
  //types : any, string, number, boolean, void, undefined, null
  user : User;

  //Methods
  constructor() {

  }

  ngOnInit() {
    this.user = {
      firstName : 'John',
      lastName : 'Doe',
      age : 30,
      address : {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
      }
    }
  }
}
