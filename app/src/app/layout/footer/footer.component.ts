import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="py-4 bg-light mt-auto">
      <div class="container-fluid px-4">
        <div class="d-flex align-items-center justify-content-between small">
          <div class="text-muted">Copyright © Student Management System 2024</div>
          <div>
            <a href="#">Privacy Policy</a>
            &middot;
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      background-color: #f8f9fa;
      border-top: 1px solid #dee2e6;
    }
    a {
      color: #6c757d;
      text-decoration: none;
    }
    a:hover {
      color: #343a40;
      text-decoration: underline;
    }
  `]
})
export class FooterComponent {} 