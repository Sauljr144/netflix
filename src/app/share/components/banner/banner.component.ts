import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowseComponent } from '../../../browse/browse.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, BrowseComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {



}
