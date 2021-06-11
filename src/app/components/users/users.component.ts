import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : User[];
  showExtended : boolean = true;
  loaded : boolean = false;
  enableAdd: boolean = true;
  // currentClasses = {};
  // currentStyles = {};

  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstName : 'John',
        lastName : 'Doe',
        age : 70,
        address : {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        },
        // image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        // balance: 100,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName : 'Kevin',
        lastName : 'Johnson',
        age : 34,
        address : {
          street: '20 School st',
          city: 'Lynn',
          state: 'MA'
        },
        // image: 'http://lorempixel.com/600/600/people/2',
        isActive: false,
        // balance: 200,
        registered: new Date('03/11/2017 06:20:00')
      },
      {
        firstName : 'karen',
        lastName : 'Williams',
        age : 26,
        address : {
          street: '55 Mill st',
          city: 'Miami',
          state: 'FL'
        },
        // image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        // balance: 50,
        registered: new Date('11/02/2016 10:30:00')
      }
    ];

    this.loaded = true;
    // this.showExtended = false;

    // this.addUser({
    //   firstName : 'David',
    //   lastName : 'Jackson',
    //   // age : 44,
    //   // address : {
    //   //   street: '12 Wake st',
    //   //   city: 'Miami',
    //   //   state: 'FL'
    //   // }
    // });

    // this.setCurrentClassed();
    // this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  // setCurrentClassed() {
  //   this.currentClasses = {
  //     'btn-success' : this.enableAdd,
  //     'big-text' : this.showExtended
  //   }
  // }

  // setCurrentStyles() {
  //   this.currentStyles = {
  //     'padding-top' : this.showExtended ? '0' : '40px',
  //     'font-size' : this.showExtended ? '' : '40px'
  //   }
  // }

}

//property binding --> [src]="var" or [disabled]="condition/boolean"    //recomended
//property binding --> bind-src="var" or bind-disabled="condition/boolean"
//property binding --> src="{{var}}" or disabled="{{condition/boolean}}"

//class binding --> [class.class_name]="condition/boolean"
//style binding --> [style.border]="condition/boolean"

//ngNonBindable makes the html tag not bind values

//Pipes , default pipes --> uppercase, lowercase, currency, date, number, percent
