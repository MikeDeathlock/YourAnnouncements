import { Component, Input, OnInit } from '@angular/core';
import { AdverticementsService } from 'src/app/core/services/adverticements.service';
import { Advert } from "../../../core/interfaces/advert"

@Component({
  selector: 'app-adverticement-item',
  templateUrl: './adverticement-item.component.html',
  styleUrls: ['./adverticement-item.component.scss']
})
export class AdverticementItemComponent implements OnInit {
  @Input() adverticementElement!:Advert;

  constructor(private adverticementsService: AdverticementsService) { }

  ngOnInit(): void {
    
  }

  onSelectedAdvert() {
    this.adverticementsService.advertDetailsSelected.next(this.adverticementElement);
    this.adverticementsService.advertDetailsDisplay.next(true);
  }

}
