import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
  ];
  public labels = ['Notes', 'Reminders'];
  constructor() {}
}
