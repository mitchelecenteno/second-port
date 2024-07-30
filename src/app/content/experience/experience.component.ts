import { Component } from '@angular/core';
import { EXPERIENCE } from './experience.config';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences = EXPERIENCE;

  viewResume() {
    console.log('Resumeeee');
  }
}
