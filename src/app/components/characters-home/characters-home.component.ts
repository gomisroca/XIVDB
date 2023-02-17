import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character, XIVAPIResponse, FC, Pagination } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-characters-home',
  templateUrl: './characters-home.component.html',
  styleUrls: ['./characters-home.component.scss']
})
export class CharactersHomeComponent implements OnInit {
  public characters!: Array<Character>;
  public fcs!: Array<FC>;
  public pagination!: Pagination;
  public itemSub !: Subscription;
  public routeSub !: Subscription;

  constructor( 
    private router: Router,
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['category'] == 'char') {
        if (params['search'] && params['server']){
          this.getCharacter(params['search'], params['server']);
        } else if (params['search']) {
          this.getCharacter(params['search']);
        } else if (params['server']){
          this.getCharacter(undefined, params['server']);
        }
      } else if (params['category'] == 'fc') {
        if (params['search'] && params['server']){
          this.getFC(params['search'], params['server']);
        } else if (params['search']) {
          this.getFC(params['search']);
        } else if (params['server']){
          this.getFC(undefined, params['server']);
        }
      }
    });
  }
  
  openDetails(category: string, id: number): void {
    this.router.navigate(['details', category, id]);
  }

  getFC(name?: string, server?: string): void {
    this.itemSub = this.httpService
      .getFC(name, server)
      .subscribe((itemList: XIVAPIResponse<FC>) => {
        this.fcs = itemList.Results;
        console.log(itemList);
      });
  }

  getCharacter(name?: string, server?: string): void {
    this.itemSub = this.httpService
      .getCharacter(name, server)
      .subscribe((itemList: XIVAPIResponse<Character>) => {
        this.characters = itemList.Results;
        console.log(this.characters);
      });
  }
}
