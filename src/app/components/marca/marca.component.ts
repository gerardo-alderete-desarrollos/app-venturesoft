import { CommonModule } from '@angular/common';
import { Component, effect, input } from '@angular/core';
import { FirstUpperCasePipe } from '../../pipes/first-upper-case.pipe';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { CardMarcaComponent } from '../card-marca/card-marca.component';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [CardMarcaComponent, I18nPipe, CommonModule, FirstUpperCasePipe, CardMarcaComponent],
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.scss'
})
export class MarcaComponent {
  marcaItems = input();
  marcas: any;
  active = true;

  constructor() {
    effect(() => {
        this.marcas = this.marcaItems();
    });
  }

  public sortProductsAsc(): void {
    this.marcas = this.marcas.sort((a:any, b:any) => a['descripción'].localeCompare( b['descripción']));
  }

  public sortProductsDesc() {
    this.marcas = this.marcas.sort((a:any, b:any) => b['descripción'].localeCompare(a['descripción']));
  }

  changeSort(event: any){
    const value = event.target.value;
    
    if(value === 'asc'){
      this.sortProductsAsc();
    } else {
      this.sortProductsDesc();
    }

  }
}
