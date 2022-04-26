import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'HomePage', url: '/homepage', icon: 'home' },
    { title: 'About', url: '/about-us', icon: 'flower' },
    { title: 'Products', url: '/products', icon: 'gift' },
    { title: 'Cart', url: '/folder/Archived', icon: 'cart' },
    { title: 'Your profile', url: '/folder/Trash', icon: 'heart' },
    { title: 'Contact', url: '/folder/Spam', icon: 'mail' },
    { title: 'Privacy policy', url: '/pages/policy', icon: 'warning' },
    { title: 'Logout', url: '/login', icon: 'log-out' },
  ];
  constructor() {}
}
