import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    LayoutComponent,
    HeaderComponent,
    StudentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
