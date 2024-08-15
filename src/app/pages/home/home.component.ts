import { Component, Signal, effect, viewChild } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { DetalleComponent } from "../../components/detalle/detalle.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { MarcaComponent } from "../../components/marca/marca.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { TableComponent } from "../../components/table/table.component";
import { IMarcaItem } from '../../interfaces/IMarcaItem';
import { IMenuItem } from '../../interfaces/IMenuItem';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TableComponent, MenuComponent, MarcaComponent, DetalleComponent, FooterComponent,  NgxSpinnerModule, I18nPipe,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  myComponentRef: Signal<MenuComponent> = viewChild.required(MenuComponent);
  marcasItems: IMarcaItem[] = [];
  categories: IMenuItem[] = [];
  randomMarcas: IMarcaItem[] = [];

  constructor(private _dataService : DataService, private _spinner: NgxSpinnerService) {
    this.getCategories();

    effect(() => {
      this.myComponentRef().buttonClick.subscribe(idMenu=> {
          this.obtenerMarcas(idMenu);
      });
    });
  }
  obtenerMarcas(idMenu: number){    
    this._spinner.show();
    this._dataService.getMarcas(idMenu).subscribe({
      next: (d) => { 
        this.marcasItems = d.menuItems as any;
      },
      error: (e) => {console.log(e);
      },
      complete: () =>{ 
        this._spinner.hide();
      }
    });
  }

  getCategories() {
    this._dataService.getCategorias().subscribe({
      next: (d) => { 
        this.categories = d.menuItems as IMenuItem[];
      },
      error: (e) => {console.log(e);
      },
      complete: async() =>{
        this.randomMarcas = await this.getIdsMenu();
        this.setMarcaDefault();
      }
    });
  }


  async getIdsMenu(){
    const idsMenu = this.categories.map( mi => mi.idMenu );
    let idsAleatorios: number[] = [];

    for (let index = 0; index < 4; index++) {
      idsAleatorios.push(idsMenu[Math.floor(Math.random() * idsMenu.length)]);
    }
    
    return await this._dataService.getMarcasRandom(idsAleatorios);
  }

  setMarcaDefault(){
    let idMenu: number = this.categories[0].idMenu;
    this.obtenerMarcas(idMenu);
  }
}
