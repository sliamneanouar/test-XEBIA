import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.less']
})
export class NavbarComponent {
  public isCollapsed = true;
  constructor() {
  };
  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

}
