import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="sb-nav-fixed">
      <app-header (sidebarToggle)="toggleSidebar()"></app-header>
      <div id="layoutSidenav" [class.sb-sidenav-toggled]="sidebarToggled">
        <div id="layoutSidenav_nav">
          <app-sidebar></app-sidebar>
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid px-4">
              <router-outlet></router-outlet>
            </div>
          </main>
          <app-footer></app-footer>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sb-nav-fixed {
      padding-top: 56px;
    }
    #layoutSidenav {
      display: flex;
    }
    #layoutSidenav_nav {
      width: 225px;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 56px;
      transition: transform .15s ease-in-out;
    }
    .sb-sidenav-toggled #layoutSidenav_nav {
      transform: translateX(-225px);
    }
    #layoutSidenav_content {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-left: 225px;
      min-height: calc(100vh - 56px);
      transition: margin .15s ease-in-out;
    }
    .sb-sidenav-toggled #layoutSidenav_content {
      margin-left: 0;
    }
    main {
      flex-grow: 1;
      padding: 1.5rem;
      margin-bottom: 60px;
    }
  `]
})
export class LayoutComponent {
  sidebarToggled = false;

  toggleSidebar() {
    this.sidebarToggled = !this.sidebarToggled;
  }
}
