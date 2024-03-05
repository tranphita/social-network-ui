import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.css',
})
export class UnauthorizedComponent {
  public message: string;
  public values: any[] | undefined;

  constructor() {
    this.message = 'UnauthorizedComponent constructor';
  }

  ngOnInit() {}
}
