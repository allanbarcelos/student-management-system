import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <a class="nav-link" routerLink="/dashboard">
            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
            Dashboard
          </a>
          <a class="nav-link" routerLink="/students">
            <div class="sb-nav-link-icon"><i class="fas fa-users"></i></div>
            Students
          </a>
          <a class="nav-link" routerLink="/courses">
            <div class="sb-nav-link-icon"><i class="fas fa-book"></i></div>
            Courses
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .sb-sidenav {
      background-color: #212529;
      color: rgba(255, 255, 255, 0.5);
    }
    .nav-link {
      color: rgba(255, 255, 255, 0.5);
      padding: 1rem;
      display: flex;
      align-items: center;
    }
    .nav-link:hover {
      color: rgba(255, 255, 255, 0.75);
      background-color: rgba(255, 255, 255, 0.1);
    }
    .sb-nav-link-icon {
      margin-right: 0.5rem;
    }
  `]
})
export class SidebarComponent {} 