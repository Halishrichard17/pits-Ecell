import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { ResourceComponent } from './resource/resource.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'event', component: EventComponent},
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  { path: 'resource', component: ResourceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
