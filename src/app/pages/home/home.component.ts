import { Component, Signal, effect, viewChild } from '@angular/core';
import { DetalleComponent } from "../../components/detalle/detalle.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { MarcaComponent } from "../../components/marca/marca.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { TableComponent } from "../../components/table/table.component";
import { IMarcaItem } from '../../interfaces/IMarcaItem';
import { IMenuItem } from '../../interfaces/IMenuItem';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TableComponent, MenuComponent, MarcaComponent, DetalleComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  myComponentRef: Signal<MenuComponent> = viewChild.required(MenuComponent);
  marcasItems: IMarcaItem[] = [];
  categories: IMenuItem[] = [];
  randomMarcas: IMarcaItem[] = [];

  constructor(private _dataService : DataService) {
    this.getCategories();

    effect(() => {
      this.myComponentRef().buttonClick.subscribe(idMenu=> {
          this.obtenerMarcas(idMenu);
      });
    });
  }

  obtenerMarcas(idMenu: number){
    this._dataService.getMarcas(idMenu).subscribe({
      next: (d) => { 
        this.marcasItems = d.menuItems as any;
      },
      error: (e) => {console.log(e);
      },
      complete: () =>{ 
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
}
