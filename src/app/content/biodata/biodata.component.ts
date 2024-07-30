import { Component } from '@angular/core';
import { BIODATA_SKILLS_RIGHT, BIODATA_SKILLS_LEFT } from './biodata.config';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.scss'],
})
export class BiodataComponent {
  skillsRight = BIODATA_SKILLS_RIGHT;
  skillsLeft = BIODATA_SKILLS_LEFT;
}
