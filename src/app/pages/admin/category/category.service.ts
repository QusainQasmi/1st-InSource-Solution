import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<any> {

  constructor(inject: Injector) {
    super("products" , inject);
  }

  async getConfig(page?: number , pageSize?: number , searchValue?: any){
    const params = [
      {
        name: "page",
        value: page
      },
      {
        name: "pageSize",
        value: pageSize
      },
      {
        name: "searchValue",
        value: searchValue
      },
    ]
    return await this.Get("getCategory" , params);
  }

  async saveCategory(body: any){
    return await this.Post("addCategory" , body);
  }

  async editCategory(body: any){
    return await this.Post("editCategory" , body);
  }

  async deleteCategory(id: number){
    const params = [
      {
        name: 'id',
        value: id
      }
    ]
    return await this.Get("deleteCategory" , params);
  }
}
