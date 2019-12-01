
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], songID: string): any[] {
    if(!items) return [];
    if(!songID) return items;
return items.filter( it => {
      return it.includes(songID);
    });
   }
}