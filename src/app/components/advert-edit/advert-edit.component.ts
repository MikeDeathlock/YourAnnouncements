import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Advert } from 'src/app/core/interfaces/advert';
import { AdverticementsService } from 'src/app/core/services/adverticements.service';

@Component({
  selector: 'app-advert-edit',
  templateUrl: './advert-edit.component.html',
  styleUrls: ['./advert-edit.component.scss']
})
export class AdvertEditComponent implements OnInit {
  editAdvert:Advert | undefined | null;
  @ViewChild('f') changeForm: NgForm | undefined;

  constructor(
    private route: ActivatedRoute,
    private adverticementsService: AdverticementsService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];    
    this.editAdvert = this.adverticementsService.getEditAdvert(id);
  }

  onSubmit() {
    const editedAdvert: Advert = {
      id: this.editAdvert!.id,
      title: this.editAdvert!.title,
      img: this.editAdvert!.img,
      description: this.editAdvert!.description,
      category: this.editAdvert!.category,
      date: this.editAdvert!.date
    }

    if (this.changeForm?.value.adverticementData.title.length > 0) {
      editedAdvert.title = this.changeForm?.value.adverticementData.title;
    }

    if (this.changeForm?.value.adverticementData.description.length > 0) {
      editedAdvert.description = this.changeForm?.value.adverticementData.description;
    }

    if (this.changeForm?.value.adverticementData.img.length > 0) {
      editedAdvert.img = this.changeForm?.value.adverticementData.img;
    }
    
    this.adverticementsService.editAdvert(editedAdvert);
    this.toastr.info('Your Announcement has been changed.');    
  }
}
