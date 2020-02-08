import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { LoginComponent } from './main/login/login.component';
import { ProfileComponent } from './main/profile/profile.component';
import { RosterComponent } from './main/roster/roster.component';
import { ScoresComponent } from './main/scores/scores.component';
import { ScheduleComponent } from './main/schedule/schedule.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './main/news/news.component';

import { StatisticsComponent } from './main/statistics/statistics.component';
import { PostCreateComponent } from './main/posts/post-create/post-create.component';
import { PostListComponent } from './main/posts/post-list/post-list.component';
import { AdminComponent } from './main/admin/admin.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './main/posts/edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProfileComponent,
    RosterComponent,
    ScoresComponent,
    ScheduleComponent,
    NewsComponent,
    StatisticsComponent,
    PostCreateComponent,
    PostListComponent,
    AdminComponent,
    HomeComponent,
    EditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
