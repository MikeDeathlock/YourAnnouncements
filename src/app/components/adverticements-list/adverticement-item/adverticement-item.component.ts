import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdverticementsService } from 'src/app/core/services/adverticements.service';
import { Advert } from "../../../core/interfaces/advert"

@Component({
  selector: 'app-adverticement-item',
  templateUrl: './adverticement-item.component.html',
  styleUrls: ['./adverticement-item.component.scss']
})
export class AdverticementItemComponent implements OnInit {
  @Input() adverticementElement!:Advert;
  @Input() index!:number;
  @Output() onDeleteEl = new EventEmitter<number>();


  constructor(
    private adverticementsService: AdverticementsService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  onSelectedAdvert() {
    this.adverticementsService.advertDetailsSelected.next(this.adverticementElement);
    this.adverticementsService.advertDetailsDisplay.next(true);
  }

  onEdit() {
    this.router.navigate(['/edit-advert/', this.adverticementElement.id])
  }

  onDelete() {
    this.adverticementsService.deleteAdvert(this.adverticementElement.id);
    this.onDeleteEl.emit(this.adverticementElement.id);
    this.toastr.warning('The Announcement has been deleted.');
  }

}
