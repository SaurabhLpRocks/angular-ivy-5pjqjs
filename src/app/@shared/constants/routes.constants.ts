import { Data } from '@angular/router';

import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faStroopwafel, faUsers } from '@fortawesome/free-solid-svg-icons';

export class RouteItem {
  route?: string;
}

export class NavItem extends RouteItem {
  children?: NavItem[];
  disabled?: boolean;
  public displayName = '';
  public fontAwesomeIcon: IconDefinition = <IconDefinition>{};
  materialIcon?: string;
}

export enum RoutePath {
  Dashboard = 'dashboard',
  AdminDashboard = 'admin',
  Pages = 'pages',
  Auth = 'auth',
  Login = 'login',
  ManageUsers = 'manage-users',
  EditUserDetail = 'user-details/edit/:id',
}

export const routePermissions: RouteItem[] = [
  {
    route: `${RoutePath.Pages}/${RoutePath.Dashboard}/`,
  },
];
export const sideNavMenus: NavItem[] = [
  {
    displayName: 'Admin Dashboard',
    fontAwesomeIcon: faStroopwafel,
    children: [],
    ...routePermissions[0],
  },
];

export const defaultRoutesByRole = {
  fmAdmin: `${RoutePath.Pages}/${RoutePath.Dashboard}/${RoutePath.AdminDashboard}`,
};
