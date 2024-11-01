import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayPoject = signal<IProjects[]>([
    {
      src: 'assets/image/projects/vfull.png',
      alt: 'Projeto vida FullStack',
      title: 'Vida Fullstack',
      width: '100px',
      height: '51px',
      description: '<p>Meu projeto tanananaa<p/>',
      links: [
        {
          name: 'Conheça o projeto',
          href: ''
        }
      ]
    }
  ])
}
