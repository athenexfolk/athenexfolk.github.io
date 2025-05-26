import { Component } from '@angular/core';
import { Toggler } from './shared/utils/toggler';
import { TechnologyComponent } from './shared/components/technology/technology.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TechnologyComponent],
})
export class AppComponent {
  title = 'athenexfolk';

  techs = [
    'Angular',
    '.NET',
    'Next',
    'React',
    'Nest',
    'Express',
    'Microsoft SQL Server',
    '',
  ];

  menuPanel = new Toggler();
}
