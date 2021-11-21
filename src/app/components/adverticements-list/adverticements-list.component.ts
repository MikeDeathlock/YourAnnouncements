import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Advert } from 'src/app/core/interfaces/advert';
import { AdverticementsService } from 'src/app/core/services/adverticements.service';

@Component({
  selector: 'app-adverticements-list',
  templateUrl: './adverticements-list.component.html',
  styleUrls: ['./adverticements-list.component.scss']
})
export class AdverticementsListComponent implements OnInit, OnDestroy {
  adverticements:Advert[] | undefined | null;
  filteredAdverticements:Advert[] | undefined | null;
  adverticementsSubscription!:Subscription;
  advertDetailsSubscription!:Subscription;
  detailsDisplaySubscription!:Subscription;
  detailsSelected!:Advert;
  displayDetails!:boolean;

  titleSearch:string | null | undefined;
  categorySearch:string | null | undefined;

  constructor(private adverticementsService: AdverticementsService) { }

  ngOnInit(): void {
    this.adverticements = this.adverticementsService.adverticements;
    this.filteredAdverticements = this.adverticements;

    this.advertDetailsSubscription = this.adverticementsService.advertDetailsSelected
      .subscribe((advert:Advert) => {
        this.detailsSelected = advert;
      });

    this.detailsDisplaySubscription = this.adverticementsService.advertDetailsDisplay
      .subscribe(didActivate => {
        this.displayDetails = didActivate;
      });
  }

  searchTitle(filterValue:string) {    
    this.titleSearch = filterValue;    
    this.filterAdverticements();
  }

  onCategorySelectChange(event:any) {   
    this.categorySearch = event.target.value;
    this.filterAdverticements();
  }

  filterAdverticements() {
    this.filteredAdverticements = this.adverticements;
    
    if(this.titleSearch && this.titleSearch !== "") {
      this.filteredAdverticements = this.filteredAdverticements!
        .filter(item => item.title.toLowerCase().includes(this.titleSearch!.toLowerCase()));
    }
    
    if(this.categorySearch && this.categorySearch !== "All") {
      this.filteredAdverticements = this.filteredAdverticements!
        .filter(item => item.category.toLowerCase().includes(this.categorySearch!.toLowerCase())); 
    }
  }

  ngOnDestroy(): void {
    this.advertDetailsSubscription?.unsubscribe();
    this.detailsDisplaySubscription?.unsubscribe();
  }

}
