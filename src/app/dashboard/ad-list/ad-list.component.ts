import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Ad } from 'src/app/shared/ad';

@Component({
  standalone: true,
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  imports: [CommonModule],
})
export class AdListComponent {
  @Input() ads: Ad[] = [];
}
