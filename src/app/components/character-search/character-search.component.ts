import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {
  public servers !: Array<string>;
  selected = 'char';
  
  constructor(
    private router: Router,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.getServers();
  }
  getServers(): void{
    this.httpService
    .getServers()
    .subscribe((servers: Array<string>) => {
      this.servers = servers;
      console.log(servers);
    });
  }
  onSubmit(form: NgForm) {
    this.httpService.p = 1;
    if(form.value.category &&  form.value.search && form.value.server){
      this.router.navigate(['social', form.value.category, form.value.server, form.value.search])
    } else if (form.value.category && form.value.server) {
      this.router.navigate(['social', form.value.category, form.value.server])
    } else if (form.value.category && form.value.search) {
      this.router.navigate(['social', form.value.category,  form.value.search])
    } 
  }
}
