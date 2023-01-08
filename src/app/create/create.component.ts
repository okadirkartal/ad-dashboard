import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdService } from '../shared/services/ad.service';
import { Ad } from '../shared/ad';
import { AddAdFormComponent } from './add-ad-form/add-ad-form.component';

@Component({
  standalone: true,
  selector: 'app-create',
  template: `<app-add-ad-form (save)="handleSave($event)"></app-add-ad-form>`,
  imports: [AddAdFormComponent],
})
export class CreateComponent {
  constructor(private adService: AdService, private router: Router) {}

  handleSave(ad: Ad) {
    this.adService.addAd(ad);
    this.router.navigate(['dashboard']);
  }
}
