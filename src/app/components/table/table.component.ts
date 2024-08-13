import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirstUpperCasePipe } from '../../pipes/first-upper-case.pipe';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { ModalCardComponent } from '../modal-card/modal-card.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [I18nPipe, FirstUpperCasePipe, CommonModule, ModalCardComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

}
