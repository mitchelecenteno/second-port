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
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SendMessageComponent } from './shared/send-message/send-message.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { SocialIconsComponent } from './shared/social-icons/social-icons.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ExperienceComponent,
    BiodataComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    SendMessageComponent,
    SocialIconsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatDialogModule,
    MatFormField,
    MatTooltipModule,
  ],
  // providers: [
  //   provideAnimationsAsync(), // Add this to provide animations asynchronously
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
