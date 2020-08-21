import { Component, OnInit,Inject } from '@angular/core'
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})

export class SingUpComponent implements OnInit {
  
  constructor(public dialogRef:MatDialogRef<SingUpComponent>,
    @Inject(MAT_DIALOG_DATA)public message:string,
    public afAuth: AngularFireAuth,
    public snackBar: MatSnackBar,
    public auth : AuthService,
    public router: Router,
    ) { }
  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  retypePassword = new FormControl('', [Validators.required, Validators.pattern(this.password.value)]);
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  signUp() {
    if (this.password.value !== this.retypePassword.value) {
      this.snackBar.open('Retyped password does not match!!', 'OK', {duration: 2000});
      return;
    }
    this.afAuth.createUserWithEmailAndPassword(this.email.value, this.password.value).then(() => {
      this.snackBar.open('Success!', 'OK', {duration: 1000});
      this.email.reset();
      this.password.reset();
      this.retypePassword.reset();
      this.router.navigate(['./Login']);
      this.dialogRef.close();
    }).catch((err) => {
      this.snackBar.open(err, 'OK', {duration: 2000});
    });
  }
  checked = false;
  color= 'warn';
}
