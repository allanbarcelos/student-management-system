import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommonModule } from '@angular/common';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    LayoutComponent,
    HeaderComponent,
    ProfileComponent,
    CourseListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
