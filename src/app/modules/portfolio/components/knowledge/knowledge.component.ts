import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/Iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
    {
      src: 'assets/icons/knowledges/csharp.svg',
      alt: 'Ícone de conhecimento de Csharp'
    },
    {
      src: 'assets/icons/knowledges/angular.svg',
      alt: 'Ícone de conhecimento de Angular'
    },
    {
      src: 'assets/icons/knowledges/typescript.svg',
      alt: 'Ícone de conhecimento de Typescript'
    }
  ])
}
