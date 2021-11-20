import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/core/interfaces/advert';
import { AdverticementsService } from 'src/app/core/services/adverticements.service';

@Component({
  selector: 'app-adverticements-list',
  templateUrl: './adverticements-list.component.html',
  styleUrls: ['./adverticements-list.component.scss']
})
export class AdverticementsListComponent implements OnInit {
  adverticements!: Advert[];

  constructor(private adverticementsService: AdverticementsService) { }

  ngOnInit(): void {
    this.adverticements = this.adverticementsService.adverticements;    
  }

}
