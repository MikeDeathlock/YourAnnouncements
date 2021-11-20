import { Injectable } from '@angular/core';
import { Advert } from "../interfaces/advert";
import { Adverticements } from "../mock/Adverticements";

@Injectable({
  providedIn: 'root'
})
export class AdverticementsService {
  adverticements!: Advert[];

  constructor(private adverticementsData: Adverticements) {
    this.adverticements = this.adverticementsData.getAdverticements();
  }
}
