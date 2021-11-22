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

  addNewAdvert(addAdvert:Advert) {
    this.adverticements.unshift(addAdvert);
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


  getRecomendedByTitle(id:number, title:string, text:string):Advert[] {
    let splitTitle1 = title.split(' ');
    let recomendations:Advert[] = [];    
    for(let i = 0; i < this.adverticements.length; i++) {
      if(this.adverticements[i].id === id) continue;
      let splitTitle2 = this.adverticements[i].title.split(' ');
      for(let k = 0; k < splitTitle2.length; k++) {
        if(splitTitle2[k].length > 3 && splitTitle1.includes(splitTitle2[k])) {
          // let description = this.adverticements[i].description;
          let result = this.getRecomendedByDescription(text, i);
          if (result) {
            recomendations.push(result);
            i++;
            break
          }
        }
      }
    }
    return recomendations;
  }

  getRecomendedByDescription(description:string, index:number) {
    let splitDesc1 = description.split(' ');
    for(let i = 0; i < splitDesc1.length; i++) {
      if(splitDesc1[i].length > 3 && this.adverticements[index].description.includes(splitDesc1[i])) {
        return this.adverticements[index];
      }      
    }
    return null;
  }
}
