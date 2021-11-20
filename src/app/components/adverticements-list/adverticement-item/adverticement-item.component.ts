import { Component, Input, OnInit } from '@angular/core';
import { Advert } from "../../../core/interfaces/advert"

@Component({
  selector: 'app-adverticement-item',
  templateUrl: './adverticement-item.component.html',
  styleUrls: ['./adverticement-item.component.scss']
})
export class AdverticementItemComponent implements OnInit {
  @Input() adverticementElement!:Advert;

  constructor() { }

  ngOnInit(): void {
    console.log(this.adverticementElement);
  }

}
