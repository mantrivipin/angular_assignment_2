import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userName = '';
  buttonDisable = true;

  constructor() {
  }

  checkEnableDisable(){
    if (this.userName.length > 1) {
      this.buttonDisable = false;
    }
    else {
      this.buttonDisable = true;
    }

    return this.buttonDisable;
    // return this.userName === '';
  }

  onButtonClick(){
    this.userName = '';
    this.buttonDisable = false;
  }

}
