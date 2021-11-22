import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Advert } from 'src/app/core/interfaces/advert';
import { AdverticementsService } from 'src/app/core/services/adverticements.service';

@Component({
  selector: 'app-advert-edit',
  templateUrl: './advert-edit.component.html',
  styleUrls: ['./advert-edit.component.scss']
})
export class AdvertEditComponent implements OnInit {
  editAdvert:Advert | undefined | null;

  constructor(
    private route: ActivatedRoute,
    private adverticementsService: AdverticementsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];    
    this.editAdvert = this.adverticementsService.getEditAdvert(id);
  }

}
