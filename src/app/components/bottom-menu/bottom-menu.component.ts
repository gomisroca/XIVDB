import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent implements OnInit {
  constructor(
    public httpService: HttpService,
    public HomeComponent: HomeComponent,
  ) { }

  ngOnInit(): void {
  }

  pageChangeFirst(){
    this.httpService.pagination();
    this.HomeComponent.ngOnInit();
  }
  pageChangeLast(page: number){
    this.httpService.pagination(undefined, page);
    this.HomeComponent.ngOnInit();
  }
  pageChangePrevious(){
    this.httpService.pagination('down');
    this.HomeComponent.ngOnInit();
  }

  pageChangeNext(){
    this.httpService.pagination('up');
    this.HomeComponent.ngOnInit();
  }

  pageChangeUpDown(count: number){
    this.httpService.pagination(undefined, undefined, count);
    this.HomeComponent.ngOnInit();
  }
}
