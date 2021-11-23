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

  getNewId():number {
    let idCount = 0;
    for(let i = 0; i < this.adverticements.length; i++) {
      if(this.adverticements[i].id > 0) {
        idCount = this.adverticements[i].id;
      }
    }
    return idCount + 1;
  }

  addNewAdvert(addAdvert:Advert) {
    this.adverticements.unshift(addAdvert);
  }

  getEditAdvert(id:number):Advert | undefined {  
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

  getRecomendedByTitle(id:number, title:string):Advert[] {
    let splitTitle1 = title.split(' ');
    let recomendations:Advert[] = [];
    for(let i = 0; i < this.adverticements.length; i++) {
      if (this.adverticements[i].id === id) {    
        continue;
      }
      let splitTitle2 = this.adverticements[i].title.split(' ');
      for(let k = 0; k < splitTitle2.length; k++) {
        if (splitTitle2[k].length > 3 && splitTitle1.includes(splitTitle2[k])) {
          let splitDescription = this.adverticements[i].description.split(' ');
          for(let m = 0; m < splitDescription.length; m++) {
            if (splitTitle1.includes(splitDescription[m])) {
              let filter = recomendations.filter(x => x.id === this.adverticements[i].id);
              if (filter.length <= 0) {
                recomendations.push(this.adverticements[i]);
              }              
              if (recomendations.length === 3) {
                return recomendations;
              }  
              break
            }
          }  
        }
      }
    }
    return recomendations;
  }
}
