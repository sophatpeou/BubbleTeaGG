import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RosterComponent } from './main/roster/roster.component';
import { ScheduleComponent } from './main/schedule/schedule.component';
import { LoginComponent } from './main/login/login.component';
import { ProfileComponent } from './main/profile/profile.component';
import { ScoresComponent } from './main/scores/scores.component';
import { NewsComponent } from './main/news/news.component';
import { StatisticsComponent } from './main/statistics/statistics.component';
// import {EditComponent} from './main/posts/edit/edit.component';
import {PostCreateComponent} from './main/posts/post-create/post-create.component';

const routes: Routes = [
  {
    path: 'statistic',
    component: StatisticsComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'scores',
    component: ScoresComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'edit/:postId',
    component: PostCreateComponent
  },
  {
    path: 'roster',
    component: RosterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'news',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
