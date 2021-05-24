import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {ProfileService   } from "./profile.service";
import { AboutComponent } from './about/about.component';
import { AboutService } from "./about.service";
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { DateCountComponent } from './date-count/date-count.component';
import { HighlightDirectiveComponent } from './highlight-directive/highlight-directive.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
    HighlightDirective,
    DateCountPipe,
    DateCountComponent,
    HighlightDirectiveComponent,
    RepositoriesComponent,
    UsersComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProfileService,AboutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }