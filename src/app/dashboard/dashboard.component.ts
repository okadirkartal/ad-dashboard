import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdService } from 'src/app/shared/services/ad.service';
import { AdListComponent } from './ad-list/ad-list.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [AdListComponent, CommonModule],
})
export class DashboardComponent {
  constructor(public adService: AdService) {}
}
