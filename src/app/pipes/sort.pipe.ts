import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  //Customed pipe for sorting products by price or name
  transform(value: Array<string>, args: any[] ): any {
    const sortField = args[0];
    const sortDirection = args[1];
    let multiplier = 1;

    //Solves the descending or ascending logic for the sorting 
    if (sortDirection === 'desc') {
      multiplier = -1;
    }

    //Sort the array with either price or name parameters
    value.sort((a: any, b: any) => {
      if (a[sortField] < b[sortField]) {
        return -1 * multiplier;
      } else if (a[sortField] > b[sortField]) {
        return 1 * multiplier;
      } else {
        return 0;
      }
    }
    );

    return value;
  }


}
