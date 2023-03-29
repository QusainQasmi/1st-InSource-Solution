import { Inject, Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http'
import { catchError, map, Observable, of } from 'rxjs';


@Injectable()
export abstract class BaseService<T extends any> {

  private http!: HttpClient;
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

  url = '/api/'

  // async Get(methodName: any, params?: any) {
  //   let obj: any = {};
  //   if (params) {
  //     let url = `${this.url}${this.controller}/${methodName}/${params}`
  //     return await this.http.get<any>(url , this.httpOptions).pipe(map((res: any) => {
  //       obj.isSuccessFul = true;
  //       obj.Data = res;
  //       return obj
  //     }), catchError ((error: any) => {
  //       obj.isSuccessFul = false;
  //       obj.Data = error.error.message;
  //       return of(obj)
  //     })
  //     );
  //   }
  //   else {
  //     let url = `${this.url}${this.controller}/${methodName}`
  //     return await this.http.get<any>(url , this.httpOptions).pipe(map((res: any) => {
  //       obj.isSuccessFul = true;
  //       obj.Data = res;
  //       return obj
  //     }), catchError ((error: any) => {
  //       obj.isSuccessFul = false;
  //       obj.Data = error.error.message;
  //       return of(obj)
  //     })
  //     );
  //   }
  // }

  Get(methodName:any,params?:any): Observable<any>{
    let hparams = new HttpParams();
    let obj: any = {}
    let url = `${this.url}${this.controller}/${methodName}`;
    if(params){
      for(let param in params){
        hparams= hparams.set(params,params[param])
      }
    }
     return this.http.get(url,{headers:this.httpOptions.headers, params:params}).pipe(map(( res: any ) => {
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