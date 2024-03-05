import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-default-settings',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './default-settings.component.html',
  styleUrl: './default-settings.component.css',
})
export class DefaultSettingsComponent {
  constructor(
    private readonly oidcSecurityService: OidcSecurityService,
    private readonly router: Router
  ) {}

  logout() {
    debugger;
    console.log('start logoff');
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log(result));
  }
}
