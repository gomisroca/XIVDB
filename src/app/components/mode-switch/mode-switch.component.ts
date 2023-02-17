import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mode-switch',
  templateUrl: './mode-switch.component.html',
  styleUrls: ['./mode-switch.component.scss']
})
export class ModeSwitchComponent implements OnInit {
  mode !: string;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let url = this.activatedRoute.toString();
    if (url.includes('social')){
      console.log(url);
      this.mode = 'social';
    } else if (url.includes('details')){
      console.log(url);
      this.mode = 'social';
    } else{
      console.log(url);
      this.mode = 'game';
    }
  }

}
