import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .active {
        @apply bg-gray-900 hover:bg-gray-900 text-white;
      }
    `,
  ],
  imports: [RouterModule, CommonModule],
})
export class HeaderComponent {
  links = [
    { route: '/dashboard', text: 'Dashboard' },
    { route: '/create', text: 'Create' },
  ];
}
