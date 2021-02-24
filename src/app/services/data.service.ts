import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://jsonplaceholder.typicode.com'

  constructor(private httpClient:HttpClient) { }



  get = (path:string) =>{
    return this.httpClient.get(this.baseUrl+path)
  }
}
