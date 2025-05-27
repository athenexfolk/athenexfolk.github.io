import { Component, input } from '@angular/core';
import { MasterBadgeComponent } from "../master-badge/master-badge.component";

@Component({
  selector: 'app-technology',
  imports: [MasterBadgeComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css',
})
export class TechnologyComponent {
  name = input('');
  image = input('');
  mastery = input(false);
}
