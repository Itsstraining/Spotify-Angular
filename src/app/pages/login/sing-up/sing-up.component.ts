import { Component, OnInit,Inject } from '@angular/core'
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<SingUpComponent>,
    @Inject(MAT_DIALOG_DATA)public message:string) { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
