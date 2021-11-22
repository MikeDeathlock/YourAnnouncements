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

  getEditAdvert(id:number) {  
    return this.adverticements.find(data => data.id === id); 
  }

  editAdvert(edAdvert:Advert) {
    const index = this.adverticements.findIndex(data => data.id === edAdvert.id);
    this.adverticements[index] = edAdvert;
  }
  
  deleteAdvert(id:number) {
    const index = this.adverticements.findIndex(data => data.id === id);
    this.adverticements.splice(index, 1);  
  }
}
