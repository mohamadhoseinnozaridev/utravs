import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introducing_app',
  templateUrl: './introducing_app.component.html',
  styleUrls: ['./introducing_app.component.css'],
})
export class Introducing_appComponent implements OnInit {
  showTextone: boolean = false;

  constructor() {}

  ngOnInit() {}
  ToogleTextone() {
    this.showTextone = !this.showTextone;
  }
}
