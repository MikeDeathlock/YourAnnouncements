import { Component, Input, OnInit } from '@angular/core';
import { Advert } from 'src/app/core/interfaces/advert';
import { AdverticementsService } from 'src/app/core/services/adverticements.service';

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.scss']
})
export class AdvertDetailsComponent implements OnInit {
  @Input() advertDetails!: Advert;
  recomendations!:Advert[];

  constructor(private adverticementsService: AdverticementsService) { }

  ngOnInit(): void {
    this.recomendations = this.adverticementsService
      .getRecomendedByTitle(this.advertDetails.id, this.advertDetails.title, this.advertDetails.description);
      console.log("Recomendations ",this.recomendations);
  }

  onClose() {
    this.adverticementsService.advertDetailsDisplay.next(false);
  }

}
