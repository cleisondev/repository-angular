import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
public arrayExperiences = signal<IExperiences[]>([
  {
    summary:{
      strong:'Desenvolvedor .NET',
      p: 'TMKT | Jun 2023 - Present'
    },
    text: 'Atuo como dev .net'
  }
])
}
