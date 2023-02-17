import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharacterInfo, FCInfo, ItemDetails } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character !: CharacterInfo;
  fc !: FCInfo;
  item!: ItemDetails;
  materia !: any;
  showDetails : boolean = false;
  itemId!: number;
  itemCategory!: string;
  itemSub !: Subscription;
  charSub !: Subscription;
  fcSub !: Subscription;
  routeSub !: Subscription;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.itemId = params['id'];
      this.itemCategory = params['category'];
      if(this.itemCategory == 'char'){
        this.getCharDetails(this.itemId);
      } else if(this.itemCategory == 'fc'){
        this.getFCDetails(this.itemId);
      }
    })
  }

  getCharDetails(id: number): void {
    this.charSub = this.httpService
      .getCharDetails(id).subscribe((CharacterInfo: CharacterInfo) => {
        this.character = CharacterInfo;
      })
  }

  getFCDetails(id: number): void {
    this.fcSub = this.httpService
      .getFCDetails(id).subscribe((FCInfo: FCInfo) => {
        this.fc = FCInfo;
      })
  }
  
  hideItemDetails():void{
    this.showDetails = false;
  }

  openItemDetails(id: string): void{
    this.itemSub = this.httpService
    .getItemDetails(id).subscribe((itemResp: ItemDetails) => {
      this.item = itemResp;
      this.materia = Array.from(Array(this.item.MateriaSlotCount).keys());
    })
    this.showDetails = true;
  }

  ngOnDestroy(): void{
    if (this.charSub){
      this.charSub.unsubscribe();
    }
    if (this.fcSub){
      this.fcSub.unsubscribe();
    }
    if (this.routeSub){
      this.routeSub.unsubscribe();
    }
    if (this.itemSub){
      this.itemSub.unsubscribe();
    }
  }
}
