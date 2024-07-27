import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BiodataComponent } from './content/biodata/biodata.component';
import { ContactComponent } from './content/contact/contact.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './content/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ExperienceComponent,
    BiodataComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
