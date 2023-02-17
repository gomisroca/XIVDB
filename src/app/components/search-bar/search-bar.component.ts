import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Item, SearchCategory } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public items!: Array<Item>;
  searchCategory: Array<SearchCategory> = [
    {
      name: 'Items',
      searchString: 'Item'
    },
    {
      name: 'Achievements',
      searchString: 'Achievement'
    },
    {
      name: 'Titles',
      searchString: 'Title'
    },
    {
      name: 'Mounts',
      searchString: 'Mount'
    },
    {
      name: 'Minions',
      searchString: 'Companion'
    },
    {
      name: 'Recipes',
      searchString: 'Recipe'
    },
    {
      name: 'Instanced Content',
      searchString: 'InstanceContent'
    },
    {
      name: 'Actions',
      searchString: 'Action'
    },
    {
      name: 'Crafting Actions',
      searchString: 'CraftAction'
    },
    {
      name: 'PvP Actions',
      searchString: 'PvPAction'
    },
    {
      name: 'Traits',
      searchString: 'Trait'
    },
    {
      name: 'PvP Traits',
      searchString: 'PvPTrait'
    },
    {
      name: 'NPCs',
      searchString: 'BNpcName'
    },
    {
      name: 'Levequests',
      searchString: 'Leve'
    },
    {
      name: 'Quests',
      searchString: 'Quest'
    },
    {
      name: 'FATEs',
      searchString: 'Fate'
    },
  ];

  constructor(
    private router: Router,
    private httpService : HttpService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
   }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    this.httpService.p = 1;
    if(form.value.category &&  form.value.search){
      this.router.navigate(['s', form.value.category, form.value.search])
    } else if (form.value.category) {
      this.router.navigate(['c', form.value.category])
    } else if (form.value.search){
      this.router.navigate(['s', form.value.search])
    }
  }

  getCategory(category: string) {
    this.httpService.p = 1;
    this.router.navigate(['c', category]);
  }

  getItemCategory(category?: number) {
    this.httpService.p = 1;
    this.router.navigate(['g', category])
  }

  getActions(jobName: string){
    this.httpService.p = 1;
    this.router.navigate(['j', jobName, 'actions'])
  }

}
