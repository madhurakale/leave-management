import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showHeaderOptions = false;
  currentRoute: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
    if (this.currentRoute === 'signup' || this.currentRoute === 'login') {
      this.showHeaderOptions = false;
    } else {
      this.showHeaderOptions = true;
    }
  }

}
