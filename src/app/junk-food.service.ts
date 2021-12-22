import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpBackend } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class JunkFoodService {

  private Url = 'http://localhost:3001/myData';
  private httpOptions = {
     headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  };
  errorData: {};

  constructor(handler: HttpBackend , private httpClient : HttpClient) {
    this.errorData={};
      this.httpClient = new HttpClient(handler);
  }

  getAllCards():Observable<any>
  {
    return this.httpClient.get<any>(this.Url).pipe(
      catchError(this.handleError)
    );
  }

  getAllProducts():Observable<any>
  {
    return this.httpClient.get<any>("http://localhost:3001/Products").pipe(
      catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }


}
