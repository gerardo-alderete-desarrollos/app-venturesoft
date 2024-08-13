import { TitleCasePipe } from '@angular/common';
import { Component, effect, input } from '@angular/core';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { ImgPipe } from '../../pipes/img.pipe';

@Component({
  selector: 'app-card-marca',
  standalone: true,
  imports: [I18nPipe, TitleCasePipe, ImgPipe],
  templateUrl: './card-marca.component.html',
  styleUrl: './card-marca.component.scss'
})
export class CardMarcaComponent {
  marca = input();
  detailMarca:any;
  buttonSettings = input();
  settings: any;
  
  constructor(){
    effect( () => {
      this.detailMarca = this.marca();
      this.settings = this.buttonSettings();
    })
  }


}
