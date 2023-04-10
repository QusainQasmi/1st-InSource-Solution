import { Injector, Injectable } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<any> {

  constructor(inject: Injector) {
    super("products" , inject);
  }

  async addProducts(body: any){
    return await this.Post("addAndEditProducts" , body);
  }

  async getCategorys() {
    return await this.Get("getCategoryWithSubCategory");
  }

  async getAllProducts(searchValue?: any) {
    const params = [
      {
        name: "searchValue",
        value: searchValue
      },
    ]
    return await this.Get("getProducts" , params);
  }

  async deleteProducts(id: number){
    const params = [
      {
        name: 'id',
        value: id
      }
    ]
    return await this.Get("deleteProducts" , params);
  }
  

}
