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

  skillTechs = [
    {
      name: 'Frontend',
      techs: [
        {
          name: 'Angular',
          image: 'images/angular.svg',
          mastery: true,
        },
        {
          name: 'Next',
          image: 'images/nextjs.svg',
          mastery: false,
        },
        {
          name: 'React',
          image: 'images/react.svg',
          mastery: false,
        },
        {
          name: 'Blazor',
          image: 'images/blazor.svg',
          mastery: false,
        },
        {
          name: 'Tailwind',
          image: 'images/tailwind.svg',
          mastery: true,
        },
        {
          name: 'Bootstrap',
          image: 'images/bootstrap.svg',
          mastery: false,
        },
      ],
    },
    {
      name: 'Backend',
      techs: [
        {
          name: '.NET',
          image: 'images/dotnet.svg',
          mastery: true,
        },
        {
          name: 'Nest',
          image: 'images/nestjs.svg',
          mastery: false,
        },
        {
          name: 'Express',
          image: 'images/express.svg',
          mastery: false,
        },
        {
          name: 'Node',
          image: 'images/node.svg',
          mastery: false,
        },
        {
          name: 'Spring',
          image: 'images/spring.svg',
          mastery: false,
        },
      ],
    },
    {
      name: 'Database',
      techs: [
        {
          name: 'SQL Server',
          image: 'images/mssql.svg',
          mastery: false,
        },
        {
          name: 'MongoDB',
          image: 'images/mongodb.svg',
          mastery: false,
        },
      ],
    },
    {
      name: 'Languages',
      techs: [
        {
          name: 'HTML',
          image: 'images/html.svg',
          mastery: true,
        },
        {
          name: 'CSS',
          image: 'images/css.svg',
          mastery: true,
        },
        {
          name: 'C#',
          image: 'images/csharp.svg',
          mastery: true,
        },
        {
          name: 'JavaScript',
          image: 'images/javascript.svg',
          mastery: true,
        },
        {
          name: 'TypeScript',
          image: 'images/typescript.svg',
          mastery: true,
        },
        {
          name: 'Python',
          image: 'images/python.svg',
          mastery: false,
        },
        {
          name: 'Java',
          image: 'images/java.svg',
          mastery: false,
        },
      ],
    },
    {
      name: 'Other Skills',
      techs: [
        {
          name: 'Git',
          image: 'images/git.svg',
          mastery: true,
        },
        {
          name: 'Docker',
          image: 'images/docker.svg',
          mastery: false,
        },
        {
          name: 'GCP',
          image: 'images/gcloud.svg',
          mastery: false,
        },
        {
          name: 'D365 BC',
          image: 'images/business-central.svg',
          mastery: false,
        },
      ],
    },
  ];

  menuPanel = new Toggler();
}
