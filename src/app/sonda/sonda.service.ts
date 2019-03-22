import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sonda } from './model';

@Injectable({
  providedIn: 'root'
})
export class SondaService {

  urlAPI = 'http://localhost:8080/sonda';

  constructor(private http: HttpClient) { }


  postSonda(sonda : Sonda){
    return this.http.post<Sonda>(this.urlAPI, sonda);
  } 

}
