import { Pipe, PipeTransform } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { en } from '../../assets/i18n/en';
import { fr } from '../../assets/i18n/fr';
import { sp } from '../../assets/i18n/sp';
import { DataService } from '../services/data.service';

@Pipe({
  name: 'i18n',
  standalone: true,
  pure: false,
})
export class I18nPipe implements PipeTransform {
  label = '';
  transform(lang: string): string {

    this.getLaguagueResource(lang)
    
    return this.label ? this.label : sp[lang];
    
    
  }

  constructor(private _dataService: DataService) {
  }

  async getLaguagueResource(lang: string){
    const resutl =  await firstValueFrom(
     this._dataService.languague.pipe(
      map( lang => {
        if (lang === 'sp') {
          return sp;
        } else if(lang === 'fr' ) {
          return fr;
        } else if ( lang === 'en' ){
          return en;
        }
        return sp;
      })
    ));

    this.label = resutl[lang];
    
  }
  
}

