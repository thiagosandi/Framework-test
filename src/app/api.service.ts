import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Post } from 'src/app/models/posts';
import { Album } from 'src/app/models/albums';
import { Todo } from 'src/app/models/todo';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts (): Observable<Post[]> {
    return this.http.get<Post[]>(apiUrl + '/posts')
      .pipe(
        tap(post => console.log('leu os posts')),
        catchError(this.handleError('getPosts', []))
      );
  }

  getAlbums (): Observable<Album[]> {
    return this.http.get<Album[]>(apiUrl + '/albums')
      .pipe(
        tap(album => console.log('leu o album')),
        catchError(this.handleError('getAlbums', []))
      );
  }

  getTodos (): Observable<Todo[]> {
    return this.http.get<Todo[]>(apiUrl + '/todos')
      .pipe(
        tap(todo => console.log('leu o todo')),
        catchError(this.handleError('getTodo', []))
      );
  }

  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
