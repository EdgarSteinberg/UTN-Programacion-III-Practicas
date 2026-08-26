import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./appComponent.html',
  styleUrls: ['./appComponent.css'],
  standalone: false
})
export class AppComponent {
  currentView: 'login' | 'chat' = 'login';
  displayName = 'Carlos Gardel';

  onLoginRequested(username: string): void {
    const normalized = username.trim();

    if (normalized) {
      this.displayName = normalized;
    }

    this.currentView = 'chat';
  }

  onLogoutRequested(): void {
    this.currentView = 'login';
  }
}