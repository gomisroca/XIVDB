import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { XIVAPIResponse, Item, Pagination } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public items!: Array<Item>;
  public pagination!: Pagination;
  private routeSub!: Subscription;
  private itemSub!: Subscription;
  private categorySub!: Subscription;
  private itemCategorySub!: Subscription;
  private actionSub!: Subscription;

  constructor(
    public httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(this.activatedRoute.firstChild){
      if (this.router.url.includes('/action')) {
        this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
          this.getAction(params['jobName']);
        })
      }
    } else {
      this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
        if (params['item-search-category']) {
          this.searchItems(params['item-search'],params['item-search-category'])
        } else if (params['item-search']){
          this.searchItems(params['item-search']);
        } else if (params['item-sub-category']) {
          this.getItemCategory(params['item-sub-category']);
        } else if (params['category']) {
          this.getCategory(params['category']);
        } else {
          this.searchItems();
        }
      });
    }
  }

  searchItems(search?: string, category?: string): void {
    this.itemSub = this.httpService
      .getItemList(search, category)
      .subscribe((itemList: XIVAPIResponse<any>) => {
        this.items = itemList.Results;
        this.pagination = itemList.Pagination;
        console.log(this.pagination);
      });
  }

  getCategory(category: string): void {
    this.categorySub = this.httpService
      .getCategory(category)
      .subscribe((itemList: XIVAPIResponse<any>) => {
        this.items = itemList.Results;
        this.pagination = itemList.Pagination;
        console.log(itemList)
      })
  }

  getItemCategory(category: number): void {
    this.itemCategorySub = this.httpService
    .getItemCategory(category)
    .subscribe((itemList: XIVAPIResponse<any>) => {
      this.items = itemList.Results;
      this.pagination = itemList.Pagination;
      console.log(itemList)
    })
  }

  getAction(jobName: string){
    this.actionSub = this.httpService
      .getAction(jobName)
      .subscribe((itemList: XIVAPIResponse<any>) => {
        this.items = itemList.Results;
        this.pagination = itemList.Pagination;
        console.log(itemList);
      })
  }

  openItemDetails(category: string, id: number): void {
    this.router.navigate(['c', category, id]);
  }

  ngOnDestroy(): void {
    if (this.itemSub){
      this.itemSub.unsubscribe();
    }
    if (this.routeSub){
      this.routeSub.unsubscribe();
    }
    if (this.categorySub){
      this.categorySub.unsubscribe();
    }
    if (this.itemCategorySub){
      this.itemCategorySub.unsubscribe();
    }
    if (this.actionSub){
      this.actionSub.unsubscribe();
    }
  };
}
