import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)

  public arrayPoject = signal<IProjects[]>([
    {
      src: 'assets/image/projects/api.svg',
      alt: 'Projeto vida FullStack',
      title: 'Vida Fullstack',
      width: '100px',
      height: '51px',
      description: '<p>API feita em .NET Core, usando paginação, Auto mapper, Autenticação JWT, Unit of Work.<p/>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/cleisondev/WebApi---Sec3'
        }
      ]
    },
    {
      src: 'assets/image/projects/weather.svg',
      alt: 'Projeto App Temperatura API',
      title: 'Temperatura API',
      width: '100px',
      height: '51px',
      description: '<p>App criado no início dos meus estudos, usei Javascript, Css e Html para construção do aplicativo.<p/>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/cleisondev/App-Temperatura-API'
        }
      ]
    },
    {
      src: 'assets/image/projects/netflix.svg',
      alt: 'Projeto Netflix React',
      title: 'Netflix React',
      width: '100px',
      height: '51px',
      description: '<p>Clone da Netflix, foi criado no início dos meus estudos, usei React para criação dessa aplicação.<p/>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/cleisondev/NetflixClone-ReactJs'
        }
      ]
    }
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
