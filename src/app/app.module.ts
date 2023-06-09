import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { WorksComponent } from './pages/works/works.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotasComponent } from './pages/notas/notas.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ProfileComponent,
    SkillsComponent,
    ExperienceComponent,
    WorksComponent,
    ContactComponent,
    NotasComponent,
    NavComponent
  ]
})
export class AppModule { }
