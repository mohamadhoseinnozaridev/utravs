import { Component, OnInit } from '@angular/core';
import { Serch_City } from 'src/app/interface/serch_City';

@Component({
  selector: 'app-serch_Calendar',
  templateUrl: './serch_Calendar.component.html',
  styleUrls: ['./serch_Calendar.component.css'],
})
export class Serch_CalendarComponent implements OnInit {
  showModal = false;
  items: Serch_City[] = [];
  showText: boolean = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }

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
