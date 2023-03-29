import { Injectable , Injector } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<any> {

  constructor(inject: Injector) {
    super("products" , inject);
  }

  async getCategorys() {
    return await this.Get("getCategoryWithSubCategory");
  }

}
