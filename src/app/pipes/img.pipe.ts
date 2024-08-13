import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img',
  standalone: true
})
export class ImgPipe implements PipeTransform {
  imageDefault:string = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg'
  transform(value: string): string {
    return value ? value : this.imageDefault;
  }

}
