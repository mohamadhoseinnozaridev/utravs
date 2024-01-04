import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hotel_main_pageComponent } from './page/hotel_main_page/hotel_main_page.component';
import { Hotel_serchComponent } from './page/hotel_main_page/hotel_serch/hotel_serch.component';

const routes: Routes = [
  { path: '', component: Hotel_main_pageComponent },
  { path: 'hotel', component: Hotel_serchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
