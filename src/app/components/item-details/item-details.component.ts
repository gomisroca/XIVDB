import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemDetails } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item!: ItemDetails;
  itemId!: string;
  itemCategory!: string;
  routeSub!: Subscription;
  itemSub!: Subscription;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.itemId = params['id'];
      this.itemCategory = params['category'];
      this.getItemDetails(this.itemId, this.itemCategory);
    })
  }

  getItemDetails(id: string, category?: string): void {
    this.itemSub = this.httpService
      .getItemDetails(id, category).subscribe((itemResp: ItemDetails) => {
        this.item = itemResp;
        console.log(itemResp);
      })
  }

  ngOnDestroy(): void{
    if (this.itemSub){
      this.itemSub.unsubscribe();
    }
    if (this.routeSub){
      this.routeSub.unsubscribe();
    }
  }
}
