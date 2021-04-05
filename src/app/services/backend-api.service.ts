import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../model/product';

import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private api_Url: string;

  constructor(private http: HttpClient) {

    this.api_Url = 'http://api.eebria.com/';

  }
   //Get list of prodcuts from back-end APIs
   public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.api_Url)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\nPlease make sure the URL is correct`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
