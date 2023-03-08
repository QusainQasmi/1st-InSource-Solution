import { Inject, Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, Observable, of } from 'rxjs';


@Injectable()
export abstract class BaseService<T extends any> {

  private http!: HttpClient;
  url = '/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
    })
  };

  constructor(@Inject(String) public controller: string, inject: Injector) {
    this.http = inject.get(HttpClient);
  }

  async Get(methodName: any, params?: any) {
    if (params) {
      let url = `${this.url}${this.controller}/${methodName}/${params}`
      return await this.http.get(url);
    }
    else {
      let url = `${this.url}${this.controller}/${methodName}`
      return await this.http.get(url);
    }

  }

  Post(methodName: any, body: any): Observable<any> {
    let obj: any = {}
    let url = `${this.url}${this.controller}/${methodName}`
    return this.http.post(url, body, this.httpOptions).pipe(map((res: any) => {
      obj.isSuccessFul = true;
      obj.Data = res;
      return obj;
    }), catchError((error: any) => {
      obj.isSuccessFul = false;
      obj.Error = error.error.message;
      return of(obj)
    })
    )
  }

  setController(controllerName: string) {
    this.controller = controllerName
  }

  async Delete(id: any) {
    return await this.http.delete(this.url + this.controller + "/" + id);
  }
}