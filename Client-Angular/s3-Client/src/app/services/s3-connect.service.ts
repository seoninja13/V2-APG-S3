import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
  

export class S3ConnectService {
  private baseUrl = 'http://localhost:2090';
  //private baseUrl = 'http://localhost:5195';
  //options: any;

  constructor(private http: HttpClient) { }
  
  // options = {
  //   headers?: HttpHeaders | {[header: string]: string | string[]},
  //   params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
  //   reportProgress?: boolean,
  //   responseType?: 'blob'|'json'|'text',
  //   withCredentials?: boolean,
  // }
  

  createBucket(bucketName: string): Observable<any> {

// options = {
//     headers?: HttpHeaders | {[header: string]: string | string[]},
//     params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
//     reportProgress?: boolean,
//     responseType?: 'blob'|'json'|'text',
//     withCredentials?: boolean,
//   }

    //return this.http.post<any>('${this.baseUrl}/api/buckets', {bucketName});
    //return this.http.post<any>('http://localhost:2090/api/buckets', {
    return this.http.post<any>('http://localhost:5195/api/buckets/create', {
      bucketName
    }, );
  }
}

// --------------------- in case needed -------------------------------

// {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   }
//   )
// }
