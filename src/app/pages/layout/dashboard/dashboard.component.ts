import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavigationTopComponent } from '../navigation-top/navigation-top.component';
import { NavigationLeftComponent } from '../navigation-left/navigation-left.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NewsfeedComponent } from '../../components/newsfeed/newsfeed.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [
    RouterOutlet,
    RouterModule,
    IonicModule,
    NavigationTopComponent,
    NavigationLeftComponent,
    NewsfeedComponent,
  ],
})
export class DashboardComponent {}
