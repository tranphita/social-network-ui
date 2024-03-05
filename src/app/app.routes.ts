import { Routes } from '@angular/router';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { HomeComponent } from './pages/landing/home/home.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { DashboardComponent } from './pages/layout/dashboard/dashboard.component';
import { NewsfeedComponent } from './pages/components/newsfeed/newsfeed.component';
import { AuthorProfileComponent } from './pages/components/author-profile/author-profile.component';
import { NotFoundComponent } from './pages/components/not-found/not-found.component';
import { DefaultSettingsComponent } from './pages/components/default-settings/default-settings.component';
import { HelpBoxComponent } from './pages/components/help-box/help-box.component';
import { AccountInformationComponent } from './pages/components/account-information/account-information.component';
import { GroupsComponent } from './pages/components/groups/groups.component';
import { StorieComponent } from './pages/components/storie/storie.component';
import { BadgeComponent } from './pages/components/badge/badge.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
    canActivate: [AutoLoginPartialRoutesGuard],
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AutoLoginPartialRoutesGuard],
    children: [
      {
        path: '',
        component: NewsfeedComponent,
      },
      {
        path: 'news-feed',
        component: NewsfeedComponent,
      },
      {
        path: 'badge',
        component: BadgeComponent,
      },
      {
        path: 'stories',
        component: StorieComponent,
      },
      {
        path: 'groups',
        component: GroupsComponent,
      },
      {
        path: 'author-profile',
        component: AuthorProfileComponent,
      },
      {
        path: 'default-settings',
        component: DefaultSettingsComponent,
      },
      {
        path: 'account-information',
        component: AccountInformationComponent,
      },
      {
        path: 'help-box',
        component: HelpBoxComponent,
      },
      { path: 'not-found', pathMatch: 'full', component: NotFoundComponent },
      { path: '**', redirectTo: 'not-found' },
      // Các route khác của DashboardComponent nếu có
    ],
  },
  {
    path: 'help',
    redirectTo: 'dashboard/help-box',
  },
  { path: '**', redirectTo: '/dashboard/not-found' },
];
