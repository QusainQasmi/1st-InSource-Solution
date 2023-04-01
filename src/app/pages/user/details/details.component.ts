import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  model: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DetailsComponent>) {
  }

  onZoom(ev: any, isMove: boolean) {
    const img: any = document.getElementById('img');
    const x = ev.clientX - ev.target.offsetLeft;
    const y = ev.clientY - ev.target.offsetTop;
    if (isMove) {
      img.style.transformOrigin = `${x}px ${y}px`;
      img.style.transform = "scale(2)"
    }
    else {
      img.style.transformOrigin = `center center`;
      img.style.transform = "scale(1)"
    }
  }

  ngOnInit(): void {
    this.model = this.data;
  }

}
