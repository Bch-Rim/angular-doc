import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private LoginService: LoginService,
    private UserService :UserService
  ) { }

  public ngOnInit() {

  }

  public hidePassword = true;
  public signIn(event) {
    event.dialog.close();
  }
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', Validators.required)
  })
  get f() { return this.formGroup.controls; }


  onNoClick(): void {
    this.dialogRef.close();
  }
  get result() { return this.formGroup.value }

  login() {
    if (this.formGroup.valid) {
      this.LoginService.post({
        email: this.result.email,
        password: this.result.password,

      }).subscribe(res => {
        console.log(res);
          // this.UserService.switchTo('admin');
        this.switchTo('admin');
        this.dialogRef.close(true);
      })
    }
  }
  
  switchTo(role) {
    this.UserService.switchTo(role);
  }

}
