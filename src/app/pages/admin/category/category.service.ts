import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<any> {

  constructor(inject: Injector) {
    super("products" , inject);
  }

  async getConfig(){
    return await this.Get("getCategory");
  }

  async saveCategory(body: any){
    return await this.Post("addCategory" , body);
  }

  async editCategory(body: any){
    return await this.Post("editCategory" , body);
  }

  async deleteCategory(id: number){
    return await this.Get("deleteCategory");
  }
}
