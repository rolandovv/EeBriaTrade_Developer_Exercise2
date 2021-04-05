import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //Customed pipe for filtering products by drink style
  transform(value: any[], filterString: string, propName: string): any[] {
    
    //Need a new array to filter user input 
    const resultArray = [];

    //Make sure the parameters are not empty 
    if (value) {
      if (value.length === 0 || filterString === '' || propName === '') {
        return value;
      }

      //Fill the new array based on user input 
      for (const item of value) {
        if (item[propName] === filterString) {
          resultArray.push(item);
        }
      }

      //Return the new filled array
      return resultArray;
    }
  }

}
