import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators} from '@angular/forms'
import {MatDialog} from '@angular/material/dialog'
import {SingUpComponent} from '../sing-up/sing-up.component'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public nameGroup= new FormGroup({
    userControl: new FormControl('',Validators.required),
    emailControl : new FormControl('',Validators.email),
    passwordControl : new FormControl('',Validators.required),
  })
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  onSubmit (){
    console.log(this.nameGroup.value);
  }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  openDialog() {
    const dialogRef = this.dialog.open(SingUpComponent,{});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
