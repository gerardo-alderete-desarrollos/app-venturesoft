import { CommonModule } from '@angular/common';
import { Component, effect, input } from '@angular/core';
import { FirstUpperCasePipe } from '../../pipes/first-upper-case.pipe';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { CardMarcaComponent } from '../card-marca/card-marca.component';
import { ModalCardComponent } from '../modal-card/modal-card.component';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CardMarcaComponent, I18nPipe, FirstUpperCasePipe, CardMarcaComponent, CommonModule, ModalCardComponent],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})
export class DetalleComponent {
  marcaItems = input();
  marcas: any; 

  constructor() {
    effect(() => {
        this.marcas = this.marcaItems();
    });
  }
}
