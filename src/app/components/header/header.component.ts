import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { ModalCardComponent } from '../modal-card/modal-card.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [I18nPipe, CommonModule, ModalCardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private _router : Router){}

  goToLogin(){
    this._router.navigateByUrl('login');
  }
}
