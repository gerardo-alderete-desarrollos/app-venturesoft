import { CommonModule } from '@angular/common';
import { Component, effect, input, output } from '@angular/core';
import { FirstUpperCasePipe } from '../../pipes/first-upper-case.pipe';
import { I18nPipe } from '../../pipes/i18n.pipe';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [I18nPipe, FirstUpperCasePipe, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuItems = input();
  categories: any = [];
  buttonClick = output<any>();

  constructor() {
    effect(() => {
      this.categories = this.menuItems();
    });
  }

  emitClick(idMenu:number): void {
    const idSpan = `badge${idMenu}`;
    
    this.buttonClick.emit(idMenu);
    
    this.removeAtiveFromMenuItems();
    document.getElementById(idSpan)?.classList.add("active");

  }

  removeAtiveFromMenuItems(){
    Array.from(document.querySelectorAll(".badge"), e => {
      e.classList.remove('active');
    })
  }
}
 