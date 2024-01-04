import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/interface/Hotel';

@Component({
  selector: 'app-hotel_serch',
  templateUrl: './hotel_serch.component.html',
  styleUrls: ['./hotel_serch.component.css'],
})
export class Hotel_serchComponent implements OnInit {
  price: number = 50;
  isChecked: boolean = false;
  items: Hotel[] = [];

  constructor() {
    this.items = [
      {
        id: '1',
        image: [
          '../../../../assets/img/hotel_1.webp',
          '../../../../assets/img/hotel_2.webp',
        ],
        title: 'هتل ضیافت الزهرا مشهد',
        description: 'مشهد، خیابان شهید شوشتری، شهید شوشتری 7',
        off: '%20',
        Discount: '۸,۳۷۲,۱۶۰',
        price: '6,698,340',
      },
      {
        id: '2',
        image: ['../../../../assets/img/hotel_1.webp'],
        title: 'هتل ضیافت الزهرا مشهد',
        description: 'مشهد، خیابان شهید شوشتری، شهید شوشتری 7',
        off: '%20',
        Discount: '۸,۳۷۲,۱۶۰',
        price: '6,698,340',
      },
    ];
  }

  ngOnInit() {}
}
