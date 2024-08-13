
import { Component } from '@angular/core';
import { SelectLanguagueComponent } from '../select-languague/select-languague.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SelectLanguagueComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
