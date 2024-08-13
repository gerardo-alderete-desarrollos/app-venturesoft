import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-select-languague',
  standalone: true,
  imports: [I18nPipe, CommonModule],
  templateUrl: './select-languague.component.html',
  styleUrl: './select-languague.component.scss'
})
export class SelectLanguagueComponent {
  constructor(private _dataService: DataService){
    this._dataService.changeLanguague('en')
  }

  changeLang(event: Event | any){
    const value: string =  event.target.value
    
    this._dataService.changeLanguague(value)
  }
}
