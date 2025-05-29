import { Injectable } from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  permissions!: string[];
  permissionsActions!: string[];

  constructor(
    private permissionService: NgxPermissionsService,
    private roles: NgxRolesService,
  ) {}

  setPermissions(permissionModules: string[]) {
    localStorage.setItem('permissions', JSON.stringify(permissionModules));

    this.permissionService.addPermission(this.permissions);
  }

  getPermissions(): string[] {
    return JSON.parse(localStorage.getItem('permissions') as string);
  }

  flushPermissions() {
    localStorage.removeItem('permissions');
    localStorage.removeItem('permissionActions');
    this.roles.flushRoles();
    this.permissionService.flushPermissions();
  }
}
