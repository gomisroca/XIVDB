import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { XIVAPIResponse, Item, ItemDetails, FC, Character, CharacterInfo, FCInfo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public p: number = 1;

  constructor(private http: HttpClient) { }

  getItemList(
    search?: string,
    category?: string
  ): Observable<XIVAPIResponse<Item>> {
    let params = new HttpParams();
    if(search && category){
      params = new HttpParams().set('indexes', category).set('string', search).set('page', this.p);
    } else if(category){
      params = new HttpParams().set('indexes', category).set('page', this.p);
    } else if(search){
      params = new HttpParams().set('string', search).set('page', this.p);
    } else{
      params = new HttpParams().set('string', '').set('page', this.p);
    }

    return this.http.get<XIVAPIResponse<Item>>(`${env.XIVAPI}/search`, {
      params: params,
    });
  }

  getItemDetails(id: string, category?: string): Observable<ItemDetails> {
    if (category == 'Mount'){
      return this.http.get<ItemDetails>(`${env.COLLECT}/mounts/${id}`)
    } else if(category == 'Companion'){
      return this.http.get<ItemDetails>(`${env.COLLECT}/minions/${id}`)
    } else if(category == 'Achievement'){
      return this.http.get<ItemDetails>(`${env.COLLECT}/achievements/${id}`)
    } else if(category){
      return this.http.get<ItemDetails>(`${env.XIVAPI}/${category}/${id}`);
    } else{
      return this.http.get<ItemDetails>(`${env.XIVAPI}/item/${id}`)
    }
  }

  getCategory(category: string): Observable<XIVAPIResponse<Item>> {
    let params = new HttpParams();

    params = new HttpParams().set('indexes', category).set('page', this.p);

    return this.http.get<XIVAPIResponse<Item>>(`${env.XIVAPI}/search`, {
      params: params,
    });
  }

  getItemCategory(category: number): Observable<XIVAPIResponse<Item>> {
    let params = new HttpParams();

    params = new HttpParams().set('filters', `ItemSearchCategory.ID=${category}`).set('page', this.p);

    return this.http.get<XIVAPIResponse<Item>>(`${env.XIVAPI}/search`, {
      params: params,
    });
  }

  getAction(jobName: string): Observable<XIVAPIResponse<Item>> {
    let params = new HttpParams();
    let jobId: number | undefined;
    switch(jobName){
      case 'pld':
        jobId = 20;
        break;
      case 'war':
        jobId = 22;
        break;
      case 'drk':
        jobId = 98;
        break;
      case 'gnb':
        jobId = 149;
        break;
      case 'whm':
        jobId = 25;
        break;
      case 'sch':
        jobId = 29;
        break;
      case 'ast':
        jobId = 99;
        break;
      case 'sge':
        jobId = 181;
        break;
      case 'mnk':
        jobId = 21;
        break;
      case 'drg':
        jobId = 23;
        break;
      case 'nin':
        jobId = 92;
        break;
      case 'sam':
        jobId = 111;
        break;
      case 'rpr':
        jobId = 180;
        break;
      case 'brd':
        jobId = 24;
        break;
      case 'mch':
        jobId = 96;
        break;
      case 'dnc':
        jobId = 150;
        break;
      case 'blm':
        jobId = 26;
        break;
      case 'smn':
        jobId = 28;
        break;
      case 'rdm':
        jobId = 112;
        break;
      case 'blu':
        jobId = 129;
        break;
    }
    
    params = new HttpParams().set('indexes', 'action').set('filters', `ClassJobCategory.ID=${jobId}`).set('page', this.p);
    
    return this.http.get<XIVAPIResponse<Item>>(`${env.XIVAPI}/search`, {
      params: params,
    });
  }

  getFC(name?: string, server?: string){
    let params = new HttpParams();
    if (name && server){
      params = new HttpParams().set('name', `${name}`).set('server', `${server}`).set('page', this.p);
    } else if (name){
      params = new HttpParams().set('name', `${name}`).set('page', this.p);
    } else if (server) {
      params = new HttpParams().set('server', `${server}`).set('page', this.p);
    } else {
      params = new HttpParams().set('name', 'SleepingDragons').set('server', 'Phoenix').set('page', this.p);
    }

    return this.http.get<XIVAPIResponse<FC>>(`${env.XIVAPI}/freecompany/search`, {
      params: params,
    });
  }

  getCharacter(name?: string, server?: string){
    let params = new HttpParams();
    if (name && server){
      params = new HttpParams().set('name', `${name}`).set('server', `${server}`).set('page', this.p);
    } else if (name){
      params = new HttpParams().set('name', `${name}`).set('page', this.p);
    } else if (server){
      params = new HttpParams().set('server', `${server}`).set('page', this.p);
    } else {
      params = new HttpParams().set('name', 'Jasar').set('server', 'Phoenix').set('page', this.p);
    }

    return this.http.get<XIVAPIResponse<Character>>(`${env.XIVAPI}/character/search`, {
      params: params,
    }); 
  }

  getCharDetails(id: number){
    let params = new HttpParams();
   
    params = new HttpParams().set('data', 'AC,FR,FC,MIMO,PVP').set('extended', '1');

    return this.http.get<CharacterInfo>(`${env.XIVAPI}/character/${id}`, {
      params: params,
    }); 
  }

  getFCDetails(id: number){
    let params = new HttpParams();
   
    params = new HttpParams().set('data', 'FCM').set('extended', '1');

    return this.http.get<FCInfo>(`${env.XIVAPI}/freecompany/${id}`, {
      params: params,
    }); 
  }

  getServers(){
    return this.http.get<Array<string>>(`${env.XIVAPI}/servers`);
  }
  
  pagination(direction?: string, lastPage?: number, count?: number): void {
    if (direction == 'up'){
      this.p = this.p + 1;
      console.log(this.p);
    }
     else if (direction == 'down'){
      this.p = this.p - 1;
      if(this.p < 1){
        this.p = 1;
      }
      console.log(this.p);
    } else if (lastPage){
      this.p = lastPage;
    } else if (count){
      this.p = this.p + count;
    } else {
      this.p = 1;
    }
  }

}
