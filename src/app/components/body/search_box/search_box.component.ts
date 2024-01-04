import { Component, OnInit } from '@angular/core';
import { Serch_City } from 'src/app/interface/serch_City';

@Component({
  selector: 'app-search_box',
  templateUrl: './search_box.component.html',
  styleUrls: ['./search_box.component.css'],
})
export class Search_boxComponent implements OnInit {
  items: Serch_City[] = [];
  showText: boolean = false;
  constructor() {
    this.items = [
      {
        id: '1',
        city: 'مشهد',
        place: 'خراسان رضویی ،ایران',
        descrition: 'شهر',
      },
      {
        id: '2',
        city: 'تهران',
        place: 'تهران ،ایران',
        descrition: 'شهر',
      },
      {
        id: '2',
        city: 'تهران',
        place: 'تهران ،ایران',
        descrition: 'شهر',
      },
      {
        id: '2',
        city: 'تهران',
        place: 'تهران ،ایران',
        descrition: 'شهر',
      },
      {
        id: '2',
        city: 'تهران',
        place: 'تهران ،ایران',
        descrition: 'شهر',
      },
      {
        id: '2',
        city: 'تهران',
        place: 'تهران ،ایران',
        descrition: 'شهر',
      },
      {
        id: '2',
        city: 'تهران',
        place: 'تهران ،ایران',
        descrition: 'شهر',
      },
      {
        id: '2',
        city: 'تهران',
        place: 'تهران ،ایران',
        descrition: 'شهر',
      },
    ];
  }

  ngOnInit() {}
  ToogleText() {
    this.showText = !this.showText;
  }
}
