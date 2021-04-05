import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPrice'
})
export class SortPricePipe implements PipeTransform {

  //Customed pipe for filtering products by price
  transform(value: Array<string>, args: any[]): any[] {
    const sortField = args[0];
    const sortField2 = args[1];
   
    //Need a new array to filter user input 
    const resultArray = [];

    //First sort the array with the price parameter
    value.sort((a: any, b: any) => {
      if (a[sortField] < b[sortField]) {
        return -1;
      } else if (a[sortField] > b[sortField]) {
        return 1;
      } else {
        return 0;
      }
    });

    //Make sure the parameters are not empty 
    if (value) {
      if (value.length === 0 || sortField === '' || sortField2 === '') {
        return value;
      }

      //Fill the array based on second argument(user input) 
      if (sortField2 === 'cheaper') {
        resultArray.push(value[0]);
      }
      if (sortField2 === 'expensive') {
        resultArray.push(value[value.length - 1]);
        //console.log("value lenth: "+value.length)
      }

      //console.log(resultArray);
      //Return the new filled array
      return resultArray;
    }
  }

}
