import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { HomeComponent } from './components/home/home.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'s/:item-search',
    component: HomeComponent,
  },
  {
    path:'s/:item-search-category/:item-search',
    component: HomeComponent,
  },
  {
    path:'c/:category/:page',
    component: HomeComponent,
  },
  {
    path:'c/:category/i/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'g/:item-sub-category',
    component: HomeComponent,
  },
  {
    path: 'j/:jobName',
    component: HomeComponent,
    children: [
      {
        path: ':jobInfo',
        component: HomeComponent,
      },
    ]
  },
  {
    path:'ch/:id',
    component: CharacterDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
