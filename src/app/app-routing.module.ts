import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharactersHomeComponent } from './components/characters-home/characters-home.component';
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
    path:'social',
    component: CharactersHomeComponent,
  },
  {
    path:'social/:category/:server/:search',
    component: CharactersHomeComponent,
  },
  {
    path:'social/:category/:search',
    component: CharactersHomeComponent,
  },
  {
    path:'details/:category/:id',
    component: CharacterDetailsComponent,
  },
  {
    path:'c/:category',
    component: HomeComponent,
  },
  {
    path:'c/:category/:id',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
