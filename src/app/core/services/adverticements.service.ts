import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Advert } from "../interfaces/advert";
import { Adverticements } from "../mock/Adverticements";

@Injectable({
  providedIn: 'root'
})
export class AdverticementsService {
  adverticements!: Advert[];
  advertDetailsSelected = new Subject<Advert>();
  advertDetailsDisplay = new BehaviorSubject<boolean>(false);

  constructor(private adverticementsData: Adverticements) {
    this.adverticements = this.adverticementsData.getAdverticements();
  }
}
