import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
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
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
