import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { environment } from '../../environments/environment.development';
import { IMenuResponse } from '../interfaces/IResponse';

@Injectable({
  providedIn: 'root',
  
})
export class DataService {
  languague = new Subject<string>();


  constructor(private _httpClient: HttpClient) { 

  }

  getCategorias(): Observable<IMenuResponse> {
    return this._httpClient.get<IMenuResponse>(`${environment.baseUrl}${environment.categorias}`);
  }

  getMarcas(idMenu: number): Observable<IMenuResponse> {
    return this._httpClient.get<IMenuResponse>(`${environment.baseUrl}${environment.marcas}?idMenu=${idMenu}`);
  }

  async getMarcasRandom(idsMenu: number[]) {
    let  arrayUrsl: string[] = [];

    idsMenu.forEach( id => {
      arrayUrsl.push(`${environment.baseUrl}${environment.marcas}?idMenu=${id}`)
    });
    
    let requestForkJoinMarcasByCategories = {
      url1: ajax.getJSON(arrayUrsl[0]),
      url2: ajax.getJSON(arrayUrsl[1]),
      url3: ajax.getJSON(arrayUrsl[2]),
      url4: ajax.getJSON(arrayUrsl[3]),
    }
    
    let responseMarcasByForCategories:any = {};
    let forMarcas: any = [];
    forkJoin(requestForkJoinMarcasByCategories)
      .subscribe({
        next: (r) => {
          responseMarcasByForCategories = r;

          for( let paramName in responseMarcasByForCategories) {
            let obj = responseMarcasByForCategories[paramName];
            
            forMarcas.push((obj as any).menuItems[0]);
          }
        }
      });
    
    return forMarcas;
  }

  changeLanguague(languague: string){
    this.languague.next(languague);
  }



}
