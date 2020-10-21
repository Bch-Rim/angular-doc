import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login/login-dialog/login-dialog.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log('yeststs')
  }


switchTo(role) {
  this.userService.switchTo(role);
}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: {
      },
        width: '400px'
      });
    }
  }



