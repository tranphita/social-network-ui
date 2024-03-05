import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LogLevel, provideAuth } from 'angular-auth-oidc-client';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAuth({
      config: {
        triggerAuthorizationResultEvent: true,
        postLoginRoute: '/home',
        forbiddenRoute: '/forbidden',
        logLevel: LogLevel.Debug,
        historyCleanupOff: true,
        authority: 'https://localhost:44310',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'yota-social-network-app',
        scope: 'openid email profile roles',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true
      },
    }),
  ],
};
