import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

import { Advert } from '../../core/interfaces/advert';
import { AdverticementsService } from '../../core/services/adverticements.service';

@Component({
  selector: 'app-advert-add',
  templateUrl: './advert-add.component.html',
  styleUrls: ['./advert-add.component.scss']
})
export class AdvertAddComponent implements OnInit {
  adverticementAddGroup!: FormGroup;

  idValue!:number;
  titleValue!: string;
  categoryValue!: string;
  descriptionValue!: string;
  imgValue!: string;

  constructor(
    private adverticementsService: AdverticementsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.idValue = this.adverticementsService.getNewId();

    this.adverticementAddGroup = this.formBuilder.group({      
      title: ['',[Validators.required, Validators.minLength(5)]],
      img: ['',[Validators.required, Validators.minLength(5)]],
      description: ['',[Validators.required, Validators.minLength(5)]],
      category: ['',[Validators.required]],   
    })

    this.adverticementAddGroup
      .get('title')?.valueChanges
      .subscribe(value => this.titleValue = value );

    this.adverticementAddGroup
      .get('img')?.valueChanges
      .subscribe(value => this.imgValue = value);

    this.adverticementAddGroup
      .get('description')?.valueChanges
      .subscribe(value => this.descriptionValue = value);

    this.adverticementAddGroup
      .get('category')?.valueChanges
      .subscribe(value => this.categoryValue = value);
  }

  onSubmit() {
    const newAdverticement:Advert = {
      id: this.idValue,
      title: this.titleValue,
      img: this.imgValue,
      description: this.descriptionValue,
      category: this.categoryValue,
      date: new Date()
    }

    this.adverticementsService.addNewAdvert(newAdverticement);
    this.toastr.info('The Announcement has been added.');
    this.adverticementAddGroup.reset();
  }
}
