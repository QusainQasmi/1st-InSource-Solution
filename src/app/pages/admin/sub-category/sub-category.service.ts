import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService extends BaseService<any> {

  constructor(inject: Injector) { 
    super("products", inject)
  }

  async getConfig(searchValue?: any){
    const params = [
      {
        name: "searchValue",
        value: searchValue
      },
    ]
    return await this.Get("getSubCategory" , params);
  }
 
  async saveSubCategory(body: any){
    return await this.Post("addSubCategory" , body);
  }

  async editSubCategory(body: any){
    return await this.Post("editSubCategory" , body);
  }

  async deleteSubCategory(id: number){
    const params = [
      {
        name: 'id',
        value: id
      }
    ]
    return await this.Get("deleteSubCategory" , params);
  }
}
