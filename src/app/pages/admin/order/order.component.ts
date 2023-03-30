import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {


  model: any = {};
  loader: boolean = false;
  listData: any = [{}];
  saveLoader: boolean = false;
  displayedColumns: string[] = ['actions', 'name', 'des', 'qty'];
  dataSource = new MatTableDataSource<orderElements>(data);
  tableLoader: boolean = false;
  @ViewChild('form') form!: TemplateRef<any>;

  constructor(public dialog: MatDialog, public service: CategoryService, public snackbar: MatSnackBar) { }
  search(ev: any) {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 2000)
  }

  onEdit(obj?: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '35vw';
    dialogConfig.disableClose = true;
    if (obj && obj.id) {
      this.model = obj;
      this.dialog.open(this.form, dialogConfig)
    }
    else {
      this.dialog.open(this.form, dialogConfig);
      this.model = {};
    }
  }

  async onRemove(obj: any) {
    const res = await (await this.service.deleteCategory(obj.id)).toPromise();
    if (res.isSuccessFul) {
      this.snackbar.open('Order Delete SuccessFully...!', 'OK', {
        duration: 3000
      });
      // this.getTableData();
    }
    else {
      this.snackbar.open(res.Error, 'OK', {
        duration: 3000
      });
    }
  }

  async saveData() {
    this.saveLoader = true;
    const obj = {
      categoryName: this.model.categoryName
    }
    const res = await (await this.service.saveCategory(obj)).toPromise();
    if (res.isSuccessFul) {
      this.saveLoader = false;
      this.snackbar.open('Order Add SuccessFully...!', 'OK', {
        duration: 3000
      });
      this.dialog.closeAll();
      // this.getTableData();
    }
    else {
      this.saveLoader = false;
      this.snackbar.open(res.Error, 'OK', {
        duration: 3000
      });
    }
  }

  async editData(data: any) {
    this.saveLoader = true;
    const obj = {
      id: data.id,
      categoryName: data.categoryName
    }
    const res = await (await this.service.editCategory(obj)).toPromise();
    if (res.isSuccessFul) {
      this.saveLoader = false;
      this.snackbar.open('Order Edit SuccessFully...!', 'OK', {
        duration: 3000
      });
      this.dialog.closeAll();
      // this.getTableData();
    }
    else {
      this.saveLoader = false;
      this.snackbar.open(res.Error, 'OK', {
        duration: 3000
      });
    }
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    // this.getTableData();
  }

}

export interface orderElements {
  id: number;
  name: string;
  des: string;
  qty: string;
}

const data: orderElements[] = [
  { id: 1, name: 'How are you', des: "i'm Fine", qty: '10' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 2, name: 'Hey Whatsapp', des: " Nothing", qty: '59' },
  { id: 3, name: 'Really Good', des: "Thanks", qty: '78' }
]