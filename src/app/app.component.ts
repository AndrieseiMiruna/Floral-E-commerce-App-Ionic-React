import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'HomePage', url: '/folder/Inbox', icon: 'home' },
    { title: 'About', url: '/folder/Outbox', icon: 'flower' },
    { title: 'Products', url: '/folder/Favorites', icon: 'gift' },
    { title: 'Cart', url: '/folder/Archived', icon: 'cart' },
    { title: 'Your profile', url: '/folder/Trash', icon: 'heart' },
    { title: 'Contact', url: '/folder/Spam', icon: 'mail' },
    { title: 'Privacy policy', url: '/pages/policy', icon: 'warning' },
    { title: 'Logout', url: '/folder/Spam', icon: 'log-out' }
  ];
  constructor() {}
}
