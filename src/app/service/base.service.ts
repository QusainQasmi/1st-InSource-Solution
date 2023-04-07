import { Inject, Injectable, Injector } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { catchError, map, Observable, of } from 'rxjs';


@Injectable()
export abstract class BaseService<T extends any> {

  private http!:HttpClient;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
    })
  };

  constructor(@Inject(String)public controller: string, inject: Injector) {
    this.http = inject.get(HttpClient);
  };

  url = '/api/';

  // async Get(MethodName:any,params?:any){
  //   if(params){
  //     let url = `${this.url}${this.controller}/${MethodName}/${params}`
  //     return await this.http.get(url);
  //   }
  //   else{
  //     let url = `${this.url}${this.controller}/${MethodName}`
  //     return await this.http.get(url);
  //   }  
  // }

  mergeHeader(header: any, otherHeaders: any){
    if(otherHeaders){
      let copyHeader = JSON.parse(JSON.stringify(header));
      const keys = Object.keys(otherHeaders);
      keys.forEach(x=>copyHeader[x]= otherHeaders[x]);
      return copyHeader;
    }
    return header;

  }

  GetUrl(MethodName: string, param: any[] = []){
    let url = `${this.url}${this.controller}/${MethodName}`;
    if(Array.isArray(param)){
      url= url.concat(param.reduce((prev,curr)=>{
        return (curr.value != null && curr.value != '')?prev.concat(curr.name.concat('=').concat(encodeURIComponent(curr.value).concat('&'))):prev.concat('');
      },'?'));
      if(url.lastIndexOf('&') === (url.length -1)){
        url= url.substring(0,url.lastIndexOf('&'));
      }
    }
    return url;
  }

  Get(MethodName:string , params?:any[]):Observable<any>{
    let obj:any={};
    let url = `${this.url}${this.controller}/${MethodName}`
    if(params && params.length > 0){
      return this.http.get(this.GetUrl(MethodName,params),this.mergeHeader(this.httpOptions.headers,{})).pipe(map((res:any)=>{
        obj.isSuccessFul=true;
        obj.Data=res;
        return obj;
      }),catchError((error:any)=>{
        obj.isSuccessFul=false;
        obj.Error=error.error.message;
        return of(obj)
      })
     )
    }
    else{
      return this.http.get(url,this.mergeHeader(this.httpOptions.headers,{})).pipe(map((res:any)=>{
        obj.isSuccessFul=true;
        obj.Data=res;
        return obj;
      }),catchError((error:any)=>{
        obj.isSuccessFul=false;
        obj.Error=error.error.message;
        return of(obj)
      })
     )
    }
    //   return this.http.get(this.GetUrl(MethodName,params),this.mergeHeader(this.httpOptions.headers,{})).pipe(map((res:any)=>{
    //     obj.isSuccessFul=true;
    //     obj.Data=res;
    //     return obj;
    //   }),catchError((error:any)=>{
    //     obj.isSuccessFul=false;
    //     obj.Error=error.error.message;
    //     return of(obj)
    //   })
    // )
  }

  Put(MethodName: string, body: any): Observable<any>{
    let obj: any = {};
    let url = `${this.url}${this.controller}/${MethodName}`
    return this.http.put(url,body,this.httpOptions).pipe(map((res:any)=>{
      obj.isSuccessFul=true;
      obj.Data=res;
      return obj;
    }),catchError((error:any)=>{
      obj.isSuccessFul=false;
      obj.Error=error.error.message;
      return of(obj);
    })
   )
  }

  Post(MethodName: any, body: any): Observable<any> {
    let obj: any = {};
      let url = `${this.url}${this.controller}/${MethodName}`
      return this.http.post(url,body,this.httpOptions).pipe(map((res:any)=>{
        obj.isSuccessFul=true;
        obj.Data=res;
        return obj;
      }),catchError((error:any)=>{
        obj.isSuccessFul=false;
        obj.Error=error.error.message;
        return of(obj);
      })
    )  
  }

  Delete(MethodName: string , params?: any[]): Observable<any> {
    let obj: any = {};
    let url = `${this.url}${this.controller}/${MethodName}`
      return this.http.delete(this.GetUrl(MethodName,params),this.mergeHeader(this.httpOptions.headers,{})).pipe(map((res:any)=>{
        obj.isSuccessFul=true;
        obj.Data=res;
        return obj;
      }),catchError((error:any)=>{
        obj.isSuccessFul=false;
        obj.Error=error.error.message;
        return of(obj)
      })
    );
      
  }

  setController(controllerName: string){
    this.controller = controllerName
  }
}