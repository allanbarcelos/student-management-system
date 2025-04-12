import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="btn btn-link sidebar-toggle" (click)="toggleSidebar()">
          <i class="fas fa-bars"></i>
        </button>
        <a class="navbar-brand" href="#">Student Management System</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#" (click)="logout($event)">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .sidebar-toggle {
      color: white;
      padding: 0.5rem;
    }
  `]
})
export class HeaderComponent {
  @Output() sidebarToggle = new EventEmitter<void>();
  sidebarVisible = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  toggleSidebar(): void {
    this.sidebarToggle.emit();
  }

  logout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
  }
} 