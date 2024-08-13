import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpperCase',
  standalone: true
})
export class FirstUpperCasePipe implements PipeTransform {
  
  transform(value: string ) {
    let result: string[] = [];
    for (let index = 0; index < value.length; index++) {
      const firstUpper = value[0].toLocaleUpperCase();
      
      if( index === 0 ) {
        result.push(firstUpper)
      } else {
        result.push(value[index]);
      }
    }
    
    return result.toString().replaceAll(',','');
  }

}
