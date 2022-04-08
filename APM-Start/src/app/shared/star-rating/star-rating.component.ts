import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pm-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnChanges {
  @Input() product: any = {};
  @Output() ratingClicked: EventEmitter<object> = new EventEmitter<object>();
  cropWidth = 0;

  constructor() {}

  onClick() {
    this.ratingClicked.emit(this.product);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = (this.product.rating * 75) / 5;
  }
}
