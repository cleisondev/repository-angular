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
    text: 'Desenvolvimento de aplicações tanto na parte do servidor (Back-End) quanto na interface do usuário (Front-End), utilizando as linguagens C#, Angular e SQL Server para a lógica e o armazenamento de dados. Além disso, tenho experiência em automação de processos (RPA) com Selenium, desenvolvimento de stored procedures e criação de APIs Restful, autenticação JWT, EF Core, paginação e testes unitários.'

  },
  {
    summary:{
      strong:'Estagiário de Desenvolvimento',
      p: 'TMKT | Nov 2022 - Jun 2023'
    },
    text: 'Desenvolvimento de aplicações tanto na parte do servidor (Back-End) quanto na interface do usuário (Front-End), utilizando as linguagens C#, Angular e SQL Server para a lógica e o armazenamento de dados. Além disso, tenho experiência em geração de relatórios e análise de dados.'


  }
])
}
