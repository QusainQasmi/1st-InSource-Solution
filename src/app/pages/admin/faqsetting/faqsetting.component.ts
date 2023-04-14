import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../category/category.service';
import { FaqSettingService } from './faq-setting.service';

@Component({
  selector: 'app-faqsetting',
  templateUrl: './faqsetting.component.html',
  styleUrls: ['./faqsetting.component.scss']
})
export class FaqsettingComponent {

  model: any = {};
  loader: boolean = false;
  listData: any = [{}];
  saveLoader: boolean = false;
  displayedColumns: string[] = ['actions' , 'qus', 'ans' ];
  dataSource = new MatTableDataSource<any>();
  tableLoader: boolean = false;
  @ViewChild('form') form!: TemplateRef<any>;

  constructor(public dialog: MatDialog , public service: FaqSettingService ,public snackbar: MatSnackBar) {}

  search(searchVal: any){
    this.loader = true;
    if(searchVal){
      this.getTableData(searchVal)
    }
    else{
      this.getTableData();
    }
    this.loader = false;
  }

  onEdit(obj?: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '35vw';
    dialogConfig.disableClose = true;
    if(obj && obj.id){
     this.model = obj;
     this.dialog.open(this.form , dialogConfig)
    }
    else{
      this.dialog.open(this.form , dialogConfig);
      this.model = {};
    }
  }

  async getTableData(search?: any){
    this.tableLoader = true;
    const res = await (await this.service.getConfig(search)).toPromise();
    if(res.isSuccessFul){
      this.listData = res.Data && res.Data.length > 0 ? [...res.Data] : [{}];
      this.dataSource = this.listData;
      this.tableLoader = false;
    }
    else{
      this.tableLoader = false;
      console.log(res.Data.message);
    }
  }

  async onRemove(obj: any){
    const res = await (await this.service.delete(obj.id)).toPromise();
    if(res.isSuccessFul){
      this.snackbar.open('FAQs Delete SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.getTableData();
    }
    else{
      this.snackbar.open(res.Error , 'OK' , {
        duration: 3000
      });
    }
  }

  async saveData(){
    this.saveLoader = true;
    const obj = {
      question: this.model.question,
      answer: this.model.answer
    }
    const res = await (await this.service.save(obj)).toPromise();
    if(res.isSuccessFul){
      this.saveLoader = false;
      this.snackbar.open('FAQs Add SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.dialog.closeAll();
      this.getTableData();
    }
    else{
      this.saveLoader = false;
      this.snackbar.open(res.Error , 'OK' , {
        duration: 3000
      });
    }
  }

  async editData(data: any){
    this.saveLoader = true;
    const obj = {
      id: data.id,
      question: this.model.question,
      answer: this.model.answer
    }
    const res = await (await this.service.edit(obj)).toPromise();
    if(res.isSuccessFul){
      this.saveLoader = false;
      this.snackbar.open('FAQs Edit SuccessFully...!' , 'OK' , {
        duration: 3000
      });
      this.getTableData();
      this.dialog.closeAll();
    }
    else{
      this.saveLoader = false;
      this.snackbar.open(res.Error , 'OK' , {
        duration: 3000
      });
    }
  }

  ngAfterViewInit() {
  }

  ngOnInit(){
    this.getTableData();
  }

}