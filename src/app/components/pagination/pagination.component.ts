import { Component, OnInit, EventEmitter, Output , Input} from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {
  startPage: number = 1;
  isPrevDisabled:boolean = true;
  isNextDisabled:boolean = false;
  @Output() updatePageNumber = new EventEmitter<number>();
  @Input() lastPage:boolean;

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  constructor() { }

  ngOnInit(): void {
    
  }

  handleClick(Action: string) {
    this.isPrevDisabled = false;
    this.isNextDisabled = false;

    if (Action == "Next") {
      if(this.lastPage){
        this.isNextDisabled = true;
      }
      this.startPage++;
      this.updatePageNumber.emit(this.startPage);
    } else {
      if (this.startPage > 1) {
        this.startPage--;
        this.updatePageNumber.emit(this.startPage);
        if (this.startPage == 1){
          this.isPrevDisabled = true;
        }
      } 
    }
  }
}
