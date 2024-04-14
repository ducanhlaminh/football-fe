import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { filter } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faEllipsis = faEllipsis;
  faUser = faUser;
  showInput = false;
  searchControl: FormControl = new FormControl();
  stateShowFullCates: boolean = false;
  inforUser: any;
  @ViewChild('searchBtn') searchBtn: any;
  @ViewChild('input') input: any;
  categories: any;

  constructor(private Router: Router, public dialog: MatDialog) {}
  ngOnInit(): void {}
  showFullCate() {}
  toogleInput() {
    this.input.nativeElement.style.display = 'block';
    if (this.input.nativeElement.style.display === 'block') {
      this.input.nativeElement.focus();
      if (this.searchControl.value) {
        this.Router.navigate(['tim-kiem'], {
          queryParams: { title: this.searchControl.value },
        });
      }
    }
  }
  blurInput() {
    this.input.nativeElement.style.display = 'none';
  }
  clickLogo() {
    this.Router.navigateByUrl('/trang-chu');
  }
  signIn() {
    location.assign('http://localhost:4000/api/v1/auth/google');
  }
  signOut() {
    localStorage.removeItem('token');
    window.location.reload();
  }
  navigateToAdmin() {
    this.Router.navigateByUrl('/admin/bai-viet/tao-bai-viet');
  }
}
