import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-pagination',
  templateUrl: './br-pagination.component.html',
  styleUrls: ['./br-pagination.component.scss']
})
export class BrPaginationComponent implements OnInit {
  @Input() recordCount: number = 0 ;
  @Input() numberOfRowsPerPage: number = 0;
  @Output() pageChange = new EventEmitter<number>();
  currentPage = 1;
  endIndex: number = 0;
  startIndex: number = 0;

  totalRowsSelect=[5,10,20,40,60,80,100]

  get totalPages(): number {
    return Math.ceil(this.recordCount / this.numberOfRowsPerPage);
  }

  get pagesToShow(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 7;
    let startPage = 1;
    let endPage = this.totalPages;

    if (this.totalPages > maxVisiblePages) {
      if (this.currentPage > maxVisiblePages - 2) {
        startPage = this.currentPage - 3;
        endPage = this.currentPage + 3;
        if (endPage > this.totalPages) {
          endPage = this.totalPages;
          startPage = this.totalPages - maxVisiblePages + 1;
        }
      } else {
        endPage = maxVisiblePages;
      }
    }

    for (let i = startPage+1; i < endPage; i++) {
      pages.push(i);
    }

    return pages;
  }
  calculateStartAndEndIndex(): void {
    this.startIndex = (this.currentPage - 1) * this.numberOfRowsPerPage + 1;
    this.endIndex =
      this.currentPage * this.numberOfRowsPerPage > this.recordCount
        ? this.recordCount
        : this.currentPage * this.numberOfRowsPerPage;
  }

  onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.calculateStartAndEndIndex()
    let obj:any ={
      page:page,
      rowPerPage : this.numberOfRowsPerPage 
    }
    this.pageChange.emit(obj);
  }

  // @Input() numberOfRowsPerPage: number = 0;
  // @Input() recordCount: number = 0;
  // @Output() pageChange = new EventEmitter<number>();

  // currentPage = 1;

  // get totalPages(): number {
  //   return Math.ceil(this.recordCount / this.numberOfRowsPerPage);
   
  // }

  // get visiblePages(): number[] {
  //   let start = Math.max(this.currentPage - 2, 1);
  //   let end = Math.min(start + 4, this.totalPages +1 );
  //   if (end - start < 4) {
  //     start = Math.max(end - 4, 1);
  //   }
  //   return Array.from({ length: end - start }, (_, i) => i + start);
  // }

  // goToPage(page: number): void {
  //   if (page !== this.currentPage) {
  //     this.currentPage = page;
  //     this.pageChange.emit(page);
  //   }
  // }
  constructor() { }

  ngOnInit(): void {
    this.calculateStartAndEndIndex()
  }

}
